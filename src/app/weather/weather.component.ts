import { Component, OnInit } from '@angular/core';
import { Weather } from './weather';
import { WeatherService } from '../weather.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { TestObject } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather: Array <Weather>;
  selected: Weather;
  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {
    this.selected = { day: 'Tuesday', weather: 'Cloudy', min_temp: 4,
    max_temp: 9, current_temp: 7, precip: '1%', humidity: '75%', wind: '11km/h', celsius : true};
   }

  ngOnInit() {
    this.weatherService.getWeather()
      .subscribe((weather: Weather[]) => {
        this.weather = weather;
        console.log(this.weather);
        this.selected = weather[0];
        this.route.paramMap.subscribe((params: ParamMap) => {
          // tslint:disable-next-line: radix
            this.selected = weather[parseInt( params.get('id'))];
        });
      });
  }


  clickHandler(weather) {

    this.selected = weather;

  }

}
