import { Component, OnInit } from '@angular/core';
import { WeatherInfoService } from '../weather-info.service';
import { WeatherInterface } from '../../interfaces/interfaces';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

  weatherInfo;

  constructor(private weatherInfoService: WeatherInfoService) { }

  ngOnInit():void {
    this.weatherInfoService.getWeatherInfo()
    .subscribe((data) => {
      this.weatherInfo = data;
    });
    
  }

}
