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
  forecastToday: Record<string, any> = {};
  forecastTomorrow: Record<string, any> = {};
  forecastTheDayAfterTomorrow: Record<string, any> = {};

  constructor(private weatherService: WeatherService) {}

  myData: any;
  dataSourceFirst: WeatherStatistic[] = [];
  dataSourceSecond: WeatherStatistic[] = [];
  dataSourceThird: WeatherStatistic[] = [];

  ngOnInit(): void {
    this.myData = this.weatherService.getData().subscribe((data) => {
      this.myData = data;

      // Store data
      let times: Date = this.myData['hourly']['time'];
      let temperatures: any = this.myData['hourly']['temperature_2m'];
      let windspeeds: any = this.myData['hourly']['windspeed_10m'];
      let rains: any = this.myData['hourly']['rain'];
      let relativehumiditys: any = this.myData['hourly']['relativehumidity_2m'];

      // Forecast today - to panel "Today"
      this.forecastToday['times'] = times;
      this.forecastToday['temperatures'] = temperatures;
      this.forecastToday['windspeeds'] = windspeeds;
      this.forecastToday['rains'] = rains;
      this.forecastToday['relativehumiditys'] = relativehumiditys;

      // Forecast tomorrow - to panel "tomorrow"
      this.forecastTomorrow['times'] = times;
      this.forecastTomorrow['temperatures'] = temperatures;
      this.forecastTomorrow['windspeeds'] = windspeeds;
      this.forecastTomorrow['rains'] = rains;
      this.forecastTomorrow['relativehumiditys'] = relativehumiditys;

      // Forecast the day after tomorrow - to panel "the day after tomorrow"
      this.forecastTheDayAfterTomorrow['times'] = times;
      this.forecastTheDayAfterTomorrow['temperatures'] = temperatures;
      this.forecastTheDayAfterTomorrow['windspeeds'] = windspeeds;
      this.forecastTheDayAfterTomorrow['rains'] = rains;
      this.forecastTheDayAfterTomorrow['relativehumiditys'] = relativehumiditys;

      for (let i = 0; i < this.forecastToday['times'].length; i++)
      {
        if (this.weatherService.checkTwoDates(this.weatherService.getTodayDate(), this.forecastToday['times'][i])) {
          ELEMENT_DATA_FIRST.push({
            time: this.forecastToday['times'][i],
            temperature: this.forecastToday['temperatures'][i],
            rain: this.forecastToday['rains'][i],
            windspeed: this.forecastToday['windspeeds'][i],
            relativehumiditys: this.forecastToday['relativehumiditys'][i],
          });
        }
        if (this.weatherService.checkTwoDates(this.weatherService.getTommorowDate(), this.forecastToday['times'][i])) {
          ELEMENT_DATA_SECOND.push({
            time: this.forecastToday['times'][i],
            temperature: this.forecastToday['temperatures'][i],
            rain: this.forecastToday['rains'][i],
            windspeed: this.forecastToday['windspeeds'][i],
            relativehumiditys: this.forecastToday['relativehumiditys'][i],
          });
        }
        if (this.weatherService.checkTwoDates(this.weatherService.getAfterTommorowDate(), this.forecastToday['times'][i])) {
          ELEMENT_DATA_THIRD.push({
            time: this.forecastToday['times'][i],
            temperature: this.forecastToday['temperatures'][i],
            rain: this.forecastToday['rains'][i],
            windspeed: this.forecastToday['windspeeds'][i],
            relativehumiditys: this.forecastToday['relativehumiditys'][i],
          });
        }
      }
      this.dataSourceFirst = ELEMENT_DATA_FIRST;
      this.dataSourceSecond = ELEMENT_DATA_SECOND;
      this.dataSourceThird = ELEMENT_DATA_THIRD;
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
