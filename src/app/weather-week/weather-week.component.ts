import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../weather'

@Component({
  selector: 'app-weather-week',
  templateUrl: './weather-week.component.html',
  styleUrls: ['./weather-week.component.scss']
})
export class WeatherWeekComponent implements OnInit {
  @Input() weathers: Weather[]
  @Input() selectedDay: Weather
  
  constructor() { }

  ngOnInit() {
  }

  getWeather(weather:Weather):string{
    if(weather.weather === "Cloudy")
      return "../assets/weather-images/"+"cloudy.png"
    else if(weather.weather === "Scattered Showers")
      return "../assets/weather-images/"+"rain_light.png"
    else if(weather.weather === "Partly Cloudy")
      return "../assets/weather-images/"+"partly_cloudy.png"
    else if(weather.weather === "Sunny")
      return "../assets/weather-images/"+"sunny.png"
    else if(weather.weather === "Mostly Cloudy")
      return "../assets/weather-images/"+"rain_s_cloudy.png"
  }
}
