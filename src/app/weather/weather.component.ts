import { Component, OnInit } from '@angular/core';
import { WeatherDaysService } from '../weather-days.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  selectDay
  weather = []

  constructor(private weatherDaysService: WeatherDaysService, private route: ActivatedRoute) { }

  imageURLs = {
    'Cloudy': 'assets/weather-images/cloudy.png',
    'Scattered Showers': 'assets/weather-images/rain_light.png',
    'Partly Cloudy': 'assets/weather-images/partly_cloudy.png',
    'Sunny': 'assets/weather-images/sunny.png',
    'Mostly Cloudy': 'assets/weather-images/rain_s_cloudy.png'
  }

  selectWeather(weather) {
    console.log(weather)
    this.selectWeather = weather
  }

  ngOnInit() {
    this.weatherDaysService.getDays()
    .subscribe((weather) => {this.weather = weather
      this.weather = weather
      this.route.paramMap
      .subscribe((params: ParamMap) => {
        let id = Number(params.get('id'))
        console.log("id:", id)
        this.selectDay = this.weather[id]
        console.log(this.selectDay)
        for (let w of weather) {
          w["imgRoute"]=this.imageURLs[w.weather]
          console.log(w["imgRoute"])
        }
        

    })  
  })  
  }
}
