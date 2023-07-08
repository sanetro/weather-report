import { Component, OnInit } from '@angular/core';
import { WeatherDataStructure } from '../weatherStats/weather-data-structure';
import { WeatherService } from '../weatherStats/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  location = "Cracow";
  myData: any;
  weatherNow: Record<string, any> = {};
  forecastToday: Record<string, any> = {};


  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
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

        // Today weather statistics
        this.weatherNow['day'] = this.weatherService.getTodayDay();
        this.weatherNow['hour'] = this.weatherService.getHourTime();
        this.weatherNow['date'] = this.weatherService.getTodayDate();
        this.weatherNow['temperature'] = this.weatherService.getByHourActuallData(times, temperatures);
        this.weatherNow['windspeed'] = this.weatherService.getByHourActuallData(times, windspeeds);
        this.weatherNow['rain'] = this.weatherService.getByHourActuallData(times, rains);
        this.weatherNow['relativehumidity'] = this.weatherService.getByHourActuallData(times, relativehumiditys);

      })
    ;
  }
}
