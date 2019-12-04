import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherDay } from '../weather-widget/WeatherDay';

@Component({
  selector: 'app-day-predict',
  templateUrl: './day-predict.component.html',
  styleUrls: ['./day-predict.component.scss']
})
export class DayPredictComponent implements OnInit {
  @Input() Day : WeatherDay
  @Output() Unit = new EventEmitter<string>()
  currentUnit : string
  constructor() {
    this.currentUnit = "celsius"
   }

  ngOnInit() {
  }

  ChangeUnit(unit){
    if (unit !== this.currentUnit){
      this.currentUnit = unit
      // alert(unit)
      this.Unit.emit(unit)
    }
  }
}
