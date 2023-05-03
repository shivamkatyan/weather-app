import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '';

  constructor(private http: HttpClient) { }

  getWeather(cityName: string): Observable<any> {
    return this.http.get(`https://api.weatherstack.com/current?query=${cityName}&access_key=${this.apiKey}&units=m`);
  }

  getForecast(cityName: string): Observable<any> {
    return this.http.get(`https://api.weatherstack.com/forecast?query=${cityName}&access_key=${this.apiKey}&units=m&forecast_days=7`);
  }
}
