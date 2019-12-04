import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-weather-week',
  templateUrl: './weather-week.component.html',
  styleUrls: ['./weather-week.component.scss']
})
export class WeatherWeekComponent implements OnInit {
  @Input() weather
  @Input() selectedDay
  constructor() { }

  ngOnInit() {
  }

}