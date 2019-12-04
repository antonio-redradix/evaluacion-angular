import { Component, OnInit } from '@angular/core';
import { WeatherDaysService} from '../weather-days.service'
import { ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather = []
  selectedDay

  constructor(private weatherdaysService: WeatherDaysService, private route: ActivatedRoute) { }
  selectWeather(weather) {
    console.log('hola')
    this.selectWeather = weather
  }

  imageURLs = {
    'Cloudy': 'assets/weather-images/cloudy.png',
    'Partly Cloudy': 'assets/weather-images/partly_cloudy.png',
    'Scattered Showers': 'assets/weather-images/rain_s_cloudy.png',
    'Mostly Cloudy': 'assets/weather-images/rain_s_cloudy.png',
    'Sunny': 'assets/weather-images/sunny.png'
  }

  ngOnInit() {
    this.weatherdaysService.getDays()
    .subscribe((weather) => { this.weather = weather
      this.route.paramMap
      .subscribe((params: ParamMap) => {
        let id = Number(params.get('id'))   
        this.selectedDay = this.weather[id]
        for (let iter of weather) {
          iter["imgRoute"]=this.imageURLs[iter.weather]
          console.log(iter["imgRoute"])
        }

      })
    })
  }

}
//Number te cambia  lo null a 0