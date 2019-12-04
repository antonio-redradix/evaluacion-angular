import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WeatherService } from '../weather.service'
import { Weather } from '../weather'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weathers : Weather[]
  selectedDay : Weather
  constructor(private weatherService: WeatherService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe((weathers: Weather[]) => {
      this.weathers = weathers
      this.route.paramMap.subscribe((params: ParamMap) => {
          this.selectedDay = this.weathers[parseInt(params.get('id'))-1]
      })
    })
  }

}
