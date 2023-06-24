import { Component, OnInit } from '@angular/core';

import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allData: any;
  todayTemperature: any;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getData().subscribe((data)=> {
      this.allData = data;
    });
    this.todayTemperature =  this.weatherService.getHourActuallTemperature(this.allData["hourly"]["time"], this.allData["hourly"]["temperature_2m"]);

  }




}
