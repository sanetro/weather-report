import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get<any>('https://api.open-meteo.com/v1/dwd-icon?latitude=50.06&longitude=19.94&hourly=temperature_2m');
  }

  // Get hour time from this "2023-06-29T12:00" and return "12"
  extractHourIn(date: string) {
    var time = date.split("T")[1];
    var hour = time.split(":")[0];
    return parseInt(hour);
  }

  getHourActuallTemperature(dates: string[], temperatures: number[]) {
    const hourNow = new Date().getHours();
    let index = 0;

    for (const date in dates) {
      if (this.extractHourIn(date) == hourNow) {
        return 2;
      }
      console.log(date);
      index++;
    }
    return temperatures;
  }

}
