import { Component, OnInit } from '@angular/core';
import { WeatherDataStructure } from '../weatherStats/weather-data-structure';
import { WeatherService } from '../weatherStats/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, WeatherDataStructure{
  location = "Cracow";

  time: string[] = [];
  temperature_2m: number[] = [];
  relativehumidity_2m: number[] = [];
  rain: number[] = [];
  windspeed_10m: number[] = [];

  todayDay: any;
  todayHour: any;
  todayDate: any;
  todayWindspeed: any;
  todayRain: any;
  todayTemperature: any;


  constructor(private weatherService: WeatherService) {
    this.todayDay = this.weatherService.getTodayDay();
    this.todayHour = this.weatherService.getHourTime();
    this.todayDate = this.weatherService.getTodayDate();
    this.todayTemperature = this.weatherService.getByHourActuallTemperature();
    this.temperature_2m = [23, 43, 12];
    this.time = ["12:00", "13:00", "14:00"];
  }

  ngOnInit() {


  }

}
