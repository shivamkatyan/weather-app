import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city = '';
  weatherData: any;
  forecastData: any;

  selectedIcon:any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData = data;
    });
    this.weatherService.getForecast(this.city).subscribe(data => {
      this.forecastData = data.list.filter((item: any) => item.dt_txt.includes('12:00:00'));
    });
  }
}
