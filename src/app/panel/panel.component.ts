import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from '../home/home.component';
import { WeatherService } from '../weatherStats/weather.service';

export interface WeatherStatistic {
  time: string;
  temperature: number;
  rain: number;
  windspeed: number;
  relativehumiditys: number;
}

let ELEMENT_DATA: WeatherStatistic[] = [];

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})

export class PanelComponent {
  @Input() forecastToday: any;
  @Input() forecastTomorrow: any;
  @Input() forecastTheFollowingDay: any;

  constructor(private weatherService: WeatherService) {
  }

  myData: any;


  ngOnInit() : void {
    this.myData = this.weatherService
      .getData()
      .subscribe((data) => {
        this.myData = data

        // Store data
        let times: any = this.myData['hourly']['time'];
        let temperatures: any = this.myData['hourly']['temperature_2m'];
        let windspeeds: any = this.myData['hourly']['windspeed_10m'];
        let rains: any = this.myData['hourly']['rain'];
        let relativehumiditys: any = this.myData['hourly']['relativehumidity_2m'];

        // Forecast today - to panel "Today"
        this.forecastToday['times'] = times;
        this.forecastToday['temperatures'] = temperatures;
        this.forecastToday['windspeeds'] = windspeeds;
        this.forecastToday['rains'] = rains
        this.forecastToday['relativehumiditys'] = relativehumiditys;

        // Forecast tomorrow - to panel "tomorrow"
        this.forecastTomorrow['times'] = times;
        this.forecastTomorrow['temperatures'] = temperatures;
        this.forecastTomorrow['windspeeds'] = windspeeds;
        this.forecastTomorrow['rains'] = rains
        this.forecastTomorrow['relativehumiditys'] = relativehumiditys;

        // Forecast the following day - to panel "the following day"
        this.forecastTheFollowingDay['times'] = times;
        this.forecastTheFollowingDay['temperatures'] = temperatures;
        this.forecastTheFollowingDay['windspeeds'] = windspeeds;
        this.forecastTheFollowingDay['rains'] = rains
        this.forecastTheFollowingDay['relativehumiditys'] = relativehumiditys;
      })
    ;

    for (let i = 0; i < 5 ; i++){
      ELEMENT_DATA.push( {
        time: "12:32",
        temperature: 23,
        rain: 12.2,
        windspeed: 235,
        relativehumiditys: 13}
      );
    }
  }


  displayedColumns: string[] = ['time', 'temperature', 'rain', 'windspeed', 'relativehumiditys'];
  dataSource = ELEMENT_DATA;
}
