import { Component, OnInit, Input } from '@angular/core';
import { dayPrediction } from '../interface';

@Component({
  selector: 'app-weather-week',
  templateUrl: './weather-week.component.html',
  styleUrls: ['./weather-week.component.scss']
})
export class WeatherWeekComponent implements OnInit {
  @Input() forecast : dayPrediction[];
  @Input() selectedDayIndex : number;
  constructor() { }

  ngOnInit() {
  }

}
