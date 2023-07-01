import { Injectable } from '@angular/core';
import { WeatherDataStructure } from './weather-data-structure';
import { WeatherService } from './weather.service';

export class WeatherForecast implements WeatherDataStructure {
  private data: any;
  private dates: any;

  time: any;
  temperature_2m: any;
  relativehumidity_2m: any;
  rain: any;
  windspeed_10m: any;

  constructor(private weatherService: WeatherService) {
    this.data = this.weatherService.getData();
    this.time = this.weatherService.getTimes();
    this.temperature_2m = this.weatherService.getTemperatures();
    this.relativehumidity_2m = this.weatherService.getRelativehumidity();
    this.rain = this.weatherService.getRain();
    this.windspeed_10m = this.weatherService.getWindspeed();
  }

  getData() {
    return this.data;
  }

  getTimes() {
    return this.time;
  }

  getTemperatures() {
    return this.temperature_2m;
  }

  getRelativehumiditys() {
    return this.relativehumidity_2m;
  }

  getRains() {
    return this.rain;
  }

  getWindspeeds() {
    return this.windspeed_10m;
  }

}
