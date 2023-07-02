import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from '../home/home.component';

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
  @Input() forecastToday: Record<string, any> = {};
  @Input() forecastTomorrow: Record<string, any> = {};
  @Input() forecastTheFollowingDay: Record<string, any> = {};


  ngOnInit() : void {
    console.log(this.forecastToday['times']);
    for (let i = 0; i < this.forecastToday['times'].length ; i++){
      ELEMENT_DATA.push( {
        time: this.forecastToday['times'][i],
        temperature: this.forecastToday['temperature'][i],
        rain: this.forecastToday['rain'][i],
        windspeed: this.forecastToday['windspeed'][i],
        relativehumiditys: this.forecastToday['relativehumiditys'][i]}
      );
    }
  }


  displayedColumns: string[] = ['time', 'temperature', 'rain', 'windspeed', 'relativehumiditys'];
  dataSource = ELEMENT_DATA;
}
