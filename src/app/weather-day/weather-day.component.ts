import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-day',
  templateUrl: './weather-day.component.html',
  styleUrls: ['./weather-day.component.scss']
})
export class WeatherDayComponent implements OnInit {
  @Input() weather
  @Input() dailyweather
  constructor() { }

  ngOnInit() {
  }

}
