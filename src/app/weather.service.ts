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

  getHourTime() {
    return new Date().getHours()+":00";
  }

  getTodayDay() {
    const date = new Date(); // Create a new Date object with the current date
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[date.getDay()];
  }

  getTodayDate() {
    let currentDate = new Date();
    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();
    let formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  }

  getByHourActuallTemperature(dates: Date[], temperatures: number[]) {
    const hourNow = new Date().getHours();
    let index = 0;

    for (const date in dates) {
      console.log(temperatures);
      if (date == hourNow.toString()) {
        return temperatures[index];
      }
      index++;
    }
    return temperatures[index];
  }

}
