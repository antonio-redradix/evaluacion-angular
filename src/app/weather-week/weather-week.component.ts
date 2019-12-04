import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Day } from '../interfaces';

@Component({
  selector: 'app-weather-week',
  templateUrl: './weather-week.component.html',
  styleUrls: ['./weather-week.component.scss']
})
export class WeatherWeekComponent implements OnInit {
  @Input() daysList: Day[]
  @Input() mySelectedDay: Day
  @Output() selectDayEvent = new EventEmitter<Day>()

  constructor() { }

  ngOnInit() {
    
  }

  selectFilm(day: Day) {
    this.selectDayEvent.emit(day)
  }

  getIconRoute(day:Day){
    let str = day.weather
    if (str == "Scattered Showers"){
      return "../assets/weather-images/rain_s_cloudy.png"
    }else if (str == "Sunny"){
      return "../assets/weather-images/sunny.png"
    }else if (str == "Mostly Cloudy"){
      return "../assets/weather-images/rain_light.png"
    }else if (str == "Partly Cloudy"){
      return "../assets/weather-images/partly_cloudy.png"
    }else if (str == "Cloudy"){
      return "../assets/weather-images/cloudy.png"
    }
  }
}
