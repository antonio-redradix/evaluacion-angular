import { Component, OnInit, Input } from '@angular/core';

import { WeatherService } from '../weather.service'

import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  week;
  selectedDay;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  selectDay(day){
    this.selectedDay = day;
    console.log(day)
  }

  ngOnInit() {
    this.weatherService.getWeek()
      .subscribe(data => {
        this.week = data
        this.route.paramMap
          .subscribe((params: ParamMap) => {
            let index = parseInt(params.get('id'))-1;
            this.selectDay(this.week[index]);
          })
      })
  }

}
