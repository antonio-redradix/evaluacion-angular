import { Component, OnInit } from '@angular/core';
import { WeatherDay } from './WeatherDay'
import { WeatherService } from '../weather.service'
import { ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  days : WeatherDay[]
  SelectedDay : WeatherDay
  dayToClick : number
  constructor(private weatherService : WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe((data : WeatherDay[])  => {
      this.days = data
      this.route.paramMap.subscribe((params: ParamMap) => { 
        console.log(params.get(`id`))
        if(params.get(`id`)){
          this.SelectedDay = this.days[parseInt(params.get(`id`))-1]
          this.dayToClick = parseInt(params.get(`id`))-1
          console.log(this.SelectedDay)
        }else{
          console.log("aaa")
          this.SelectedDay = this.days[0]
        }
        // this.filmClicked.emit(this.filmNumber)
      })
    })
  }

  dayChange(data){
    console.log(data)
    this.SelectedDay = data
  }

  changeUnit(data){
    console.log("aaa")
    // alert(data)
    if(data === "farenheit"){
      for (let day of this.days){
        day.current_temp = parseInt(((day.current_temp * 9 / 5) + 32).toFixed(0))
        day.min_temp = parseInt(((day.min_temp * 9 / 5) + 32).toFixed(0))
        day.max_temp = parseInt(((day.max_temp * 9 / 5) + 32).toFixed(0))
      }
    }else{
      for (let day of this.days){
        console.log(day.current_temp)
        console.log(day.min_temp)
        console.log(day.max_temp)
        day.current_temp = parseInt(((day.current_temp - 32) * 5 / 9).toFixed(0))
        day.min_temp = parseInt(((day.min_temp - 32) * 5 / 9).toFixed(0))
        day.max_temp = parseInt(((day.max_temp - 32) * 5 / 9).toFixed(0))
      }
    }
  }

}
