import { Component, OnInit } from '@angular/core';

import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    });
  }
}
