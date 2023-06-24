import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('https://api.open-meteo.com/v1/dwd-icon?latitude=50.06&longitude=19.94&hourly=temperature_2m');
  }

  // Get hour time from this "2023-06-29T12:00" and return "12"
  extractHourIn(date: string) {
    return new Date(date).getHours();
  }

  getByHourActuallTemperature(dates: Date[], temperatures: number[]) {
    const hourNow = new Date().getHours();
    let index = 0;

    for (const date in dates) {
      console.log(temperatures);
      if (date == hourNow.toString()) {
        return [new Date(), temperatures[index]];
      }
      index++;
    }
    return [new Date(), temperatures[index]];
  }

}
