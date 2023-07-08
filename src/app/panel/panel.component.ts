import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from '../home/home.component';
import { WeatherService } from '../weatherStats/weather.service';

export interface WeatherStatistic {
  time: Date;
  temperature: number;
  rain: number;
  windspeed: number;
  relativehumiditys: number;
}

let ELEMENT_DATA_FIRST: WeatherStatistic[] = [];
let ELEMENT_DATA_SECOND: WeatherStatistic[] = [];
let ELEMENT_DATA_THIRD: WeatherStatistic[] = [];

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})

export class PanelComponent {
  myData: any;
  forecast: Record<string, any> = {};
  dataSourceFirst: WeatherStatistic[] = [];
  dataSourceSecond: WeatherStatistic[] = [];
  dataSourceThird: WeatherStatistic[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.myData = this.weatherService.getData().subscribe((data) => {
      this.myData = data;

      // Store data
      let times: Date = this.myData['hourly']['time'];
      let temperatures: any = this.myData['hourly']['temperature_2m'];
      let windspeeds: any = this.myData['hourly']['windspeed_10m'];
      let rains: any = this.myData['hourly']['rain'];
      let relativehumiditys: any = this.myData['hourly']['relativehumidity_2m'];

      // Forecast is completing data fetched from API
      this.forecast['times'] = times;
      this.forecast['temperatures'] = temperatures;
      this.forecast['windspeeds'] = windspeeds;
      this.forecast['rains'] = rains;
      this.forecast['relativehumiditys'] = relativehumiditys;

      // 1. Adding from arrays of time, temperature, rain, etc. to the "forecastData" container.
      // 2. In switch is checked if date is today, tommorow or after tommorow by weatherService.checkTwoDates
      // 3. In weatherService.checkTwoDates is checked if today date is in forecastData, it gets every record related with that date
      // 4. Next is sort to ELEMENT_DATA_<numerated> these records of data and pushed to the panel.components, which can be loaded to tabs
      for (let i = 0; i < this.forecast['times'].length; i++) {
        const currentDate = this.weatherService.getTodayDate();
        const forecastTime = this.forecast['times'][i];
        const forecastData = { // 1.
          time: forecastTime,
          temperature: this.forecast['temperatures'][i],
          rain: this.forecast['rains'][i],
          windspeed: this.forecast['windspeeds'][i],
          relativehumiditys: this.forecast['relativehumiditys'][i],
        };

        switch (true) { // 2.
          case this.weatherService.checkTwoDates(currentDate, forecastTime): // 3.
            ELEMENT_DATA_FIRST.push(forecastData);
            break;
          case this.weatherService.checkTwoDates(this.weatherService.getTommorowDate(), forecastTime): // 3.
            ELEMENT_DATA_SECOND.push(forecastData);
            break;
          case this.weatherService.checkTwoDates(this.weatherService.getAfterTommorowDate(), forecastTime): // 3.
            ELEMENT_DATA_THIRD.push(forecastData);
            break;
        }
      }
      this.dataSourceFirst = ELEMENT_DATA_FIRST; // 4.
      this.dataSourceSecond = ELEMENT_DATA_SECOND; // 4.
      this.dataSourceThird = ELEMENT_DATA_THIRD; // 4.
    });
  }

  displayedColumns: string[] = [
    'time',
    'temperature',
    'rain',
    'windspeed',
    'relativehumiditys',
  ];
}
