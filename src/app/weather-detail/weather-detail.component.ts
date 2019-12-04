import { Component, OnInit, Input } from '@angular/core';
import { dayPrediction } from '../interface';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
  @Input() selectedDay : dayPrediction;
  @Input() forecast : dayPrediction[];

  currentTime: string = new Date().toLocaleTimeString();

  celToFan(cel:number):number{
    return Math.round(cel*(9/5)+32)
  }

  fanToCel(fan:number): number{
    return Math.round((fan-32)*(5/9))
  }

  changeTempUnits(){
    this.forecast.forEach( day => {
      if (day.unit === 'C'){
        day.current_temp = this.celToFan(day.current_temp);
        day.max_temp = this.celToFan(day.max_temp);
        day.min_temp = this.celToFan(day.min_temp);
        day.unit = 'F';
        return
      }
      if (day.unit === 'F'){
        day.current_temp = this.fanToCel(day.current_temp);
        day.max_temp = this.fanToCel(day.max_temp);
        day.min_temp = this.fanToCel(day.min_temp);
        day.unit = 'C'
        return
      }
    })
  }

  constructor() { }

  ngOnInit() {
    setInterval(()=> this.currentTime = new Date().toLocaleTimeString(),1000)
  }
}
