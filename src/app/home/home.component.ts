import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weatherStats/weather.service';
import { WeatherDataStructure } from '../weatherStats/weather-data-structure';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, WeatherDataStructure {
  // WeatherData interface
  time: any;
  temperature_2m: any;
  relativehumidity_2m: any;
  rain: any;
  windspeed_10m: any;

  allData: any;
  dates: any;
  temperatures: any;
  todayDate: any;
  todayDay: any
  todayHour: any;
  todayTemperature: any;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getData().subscribe((data)=> {
      this.allData = data;
      this.dates = this.allData["hourly"]["time"];
      this.temperatures = this.allData["hourly"]["temperature_2m"];

      this.todayDate = this.weatherService.getTodayDate();
      this.todayDay = this.weatherService.getTodayDay();
      this.todayHour = this.weatherService.getHourTime();
      this.todayTemperature = this.weatherService.getByHourActuallTemperature(this.dates, this.temperatures);

      // Interface : WeatherDataStructure
      this.time = this.weatherService.getTimes();
      this.temperature_2m = this.weatherService.getTemperatures();
      this.relativehumidity_2m = this.weatherService.getRelativehumidity();
      this.rain = this.weatherService.getRain();
      this.windspeed_10m = this.weatherService.getWindspeed();
    });
  }
}
