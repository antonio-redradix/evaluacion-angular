import { Component, OnInit } from '@angular/core';
import {dayPrediction} from '../interface';
import {WeatherService} from '../weather.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  forecast: dayPrediction[] = [];
  selectedDay : dayPrediction;
  selectedDayIndex: number;

  selectDay(day : dayPrediction){
    this.selectedDay = day;
  }

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.weatherService.getData()
      .subscribe((forecast : dayPrediction[]) =>{
        this.forecast = forecast;
        this.forecast.forEach(day => {
          day['img'] = day.weather.toLowerCase().replace(' ','_');
          day['abrev'] = day.day.substring(0,3);
          day['unit'] = 'C';
        })
        this.route.paramMap
          .subscribe((params: ParamMap) => {
            this.selectedDayIndex = Number(params.get('id'));
            this.selectDay(this.forecast[this.selectedDayIndex])
        })
      })
  }

}
