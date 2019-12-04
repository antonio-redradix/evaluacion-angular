import { Component, OnInit } from '@angular/core';
import {Weather} from '../weather/interface/weatherInterface';
import {WeatherDaysService} from '../weather-days.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather:Weather[]=[]
  dailyweather:Weather;
  selectedId : number;
  constructor(private weatherService: WeatherDaysService, private route: ActivatedRoute) { }
  
  selectWeather(weather){
    this.dailyweather=weather

  }

  ngOnInit() {
    this.weatherService.getDays().subscribe(
    (weather: Weather[]) => {
    this.weather = weather
    this.route.paramMap
    .subscribe((params: ParamMap) => {
        let id =params.get('id')
        this.dailyweather =weather[id];
        this.selectedId = parseInt(id)
        console.log(this.dailyweather)
  })
});
}
}