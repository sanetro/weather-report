import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  private url: any;
  private data: any;

  constructor(private http: HttpClient) {
    this.url = "https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&hourly=temperature_2m,relativehumidity_2m,rain,windspeed_10m";
    this.data = this.http.get(this.url);
  }

  getData() {
    return this.http.get(this.url);
  }

  getTimes() {
    return this.data['hourly']['time'];
  }

  getTemperatures() {
    return this.data['hourly']['temperature_2m'];
  }

  getRelativehumidity() {
    return this.data['hourly']['relativehumidity_2m'];
  }

  getRain() {
    return this.data['hourly']['rain'];
  }

  getWindspeed() {
    return this.data['hourly']['windspeed_10m'];
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

  getByHourActuallData(dates: Date[], data: any[]) {
    const hourNow = new Date().getHours();
    let index = 0;

    for (const date in dates) {
      if (date == hourNow.toString()) {
        return data[index];
      }
      index++;
    }
    return data[index];
  }



}
