import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../weather'

@Component({
  selector: 'app-weather-day',
  templateUrl: './weather-day.component.html',
  styleUrls: ['./weather-day.component.scss']
})
export class WeatherDayComponent implements OnInit {
  @Input() selectedDay: Weather
  @Input() weathers: Weather[]
  constructor() { }

  ngOnInit() {
  }

  changeToF(){
    if ((this.selectedDay.units == "celsius") || (this.selectedDay.units == undefined)){
      let currentTemp:number = ((this.selectedDay.current_temp * 9 / 5) + 32)
      this.selectedDay.current_temp = parseFloat(currentTemp.toFixed(2))
      this.selectedDay.units = "farenheit"
    }
  }

  changeToC(){
    if ((this.selectedDay.units == "farenheit") || (this.selectedDay.units == undefined)){
      let currentTemp:number = ((this.selectedDay.current_temp - 32) * (5/9))
      this.selectedDay.current_temp = parseFloat(currentTemp.toFixed(2))
      this.selectedDay.units = "celsius"
    }  
  }

  getWeather(selectedDay:Weather):string{
    if(selectedDay.weather === "Cloudy")
      return "../assets/weather-images/"+"cloudy.png"
    else if(selectedDay.weather === "Scattered Showers")
      return "../assets/weather-images/"+"rain_light.png"
    else if(selectedDay.weather === "Partly Cloudy")
      return "../assets/weather-images/"+"partly_cloudy.png"
    else if(selectedDay.weather === "Sunny")
      return "../assets/weather-images/"+"sunny.png"
    else if(selectedDay.weather === "Mostly Cloudy")
      return "../assets/weather-images/"+"rain_s_cloudy.png"
  }
}
