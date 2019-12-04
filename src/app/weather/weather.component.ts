import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../interfaces/Weather';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather : Weather[] = [];
  weatherSelected : Weather;
  imgRoutes={
    'Partly Cloudy':'assets/img/partly_cloudy.png',
    'Cloudy': 'assets/img/cloudy.png',
    'Scattered Showers': 'assets/img/scattered_showers.png',
    'Sunny': 'assets/img/sunny.png',
    'Mostly Cloudy': 'assets/img/mostly_cloudy.png'
  }  
  
  constructor(private weatherService : WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe((data : Weather[]) => {
      this.processData(data);
      this.route.paramMap .subscribe((params: ParamMap) => {
        let index = Number(params.get('id'));
        this.weatherSelected = this.weather[index];
      })
    });
    // Notification.requestPermission().then(function(result) {
    //   console.log(result);
    // });
  }

  processData(data : Weather[]){
    for (const d of data) {
      d.day = d.day.substring(0,3);
      d["imgRoute"] = this.imgRoutes[d.weather];
    }
    this.weather = data;
  };
  

}
 