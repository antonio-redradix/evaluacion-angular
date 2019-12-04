import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-week',
  templateUrl: './weather-week.component.html',
  styleUrls: ['./weather-week.component.scss']
})
export class WeatherWeekComponent implements OnInit {
@Input( )weather;
@Input( ) selectedWeather;
@Output( ) selectedWeatherEvent = new EventEmitter <any>();
selectItem(weather: any) {
  this.selectedWeatherEvent.emit(weather);
}

  constructor() { }

  ngOnInit() {
  }

}
