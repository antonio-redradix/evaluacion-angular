import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-week',
  templateUrl: './weather-week.component.html',
  styleUrls: ['./weather-week.component.scss']
})
export class WeatherWeekComponent implements OnInit {

  @Input() week;
  @Input() selectedDay;

  @Output() chooseDayEvent = new EventEmitter<object>();
  chooseDay(day: object) {
    this.chooseDayEvent.emit(day);
    console.log(day)
  }

  constructor() { }

  ngOnInit() {
  }

}
