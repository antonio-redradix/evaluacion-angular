import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {


  weatherUrls = {
    'Scattered Showers': 'assets/rain_light.png',
    'Cloudy': 'assets/cloudy.png',
    'Partly Cloudy': 'assets/partly_cloudy.png',
    'Mostly Cloudy': 'assets/rain_s_cloudy.png',
    'Sunny': 'assets/sunny.png'
  };

  weather = [];
  selectedWeather;
  id;

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  selectWeather(weather) {
    console.log(weather);
    this.selectedWeather = weather;
  }

  ngOnInit() {
    this.weatherService.getWeather()
    .subscribe((weather) => { this.weather = weather;
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.selectedWeather = this.weather[this.id];
      console.log(params.get('id'));
      for (let img of weather) {
        img['imgRoute']= this.weatherUrls[img.weather]
        console.log(img['weather'])
      }
    });
  });
}
}
