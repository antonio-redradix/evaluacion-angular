import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Day } from '../interfaces';

@Component({
  selector: 'app-weather-day',
  templateUrl: './weather-day.component.html',
  styleUrls: ['./weather-day.component.scss']
})
export class WeatherDayComponent implements OnInit {
  @Input() mySelectedDay: Day
  @Input() myDegrees: number
  @Output() selectDegreesEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  selectDegrees(type:number) {
    this.selectDegreesEvent.emit(type)
  }
}
