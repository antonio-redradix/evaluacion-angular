import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../interfaces/Weather';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() weatherSelected : Weather;
  date : Date = new Date();
  currentHour = this.date.getHours() + ":"+ (this.date.getMinutes()<10?'0':'') + this.date.getMinutes();
  temperatureMode = 'Celsius';
  constructor() { }

  ngOnInit() {
  }

  changeTemperature(deg){
    switch(deg){
      case 'Celsius':  
        if(this.temperatureMode != 'Celsius'){
          this.weatherSelected.current_temp = Math.round((this.weatherSelected.current_temp - 32) * 5 / 9);
          this.temperatureMode = 'Celsius';
        }
        break;
      case 'Fahrenheit': 
        if(this.temperatureMode != 'Fahrenheit'){
          this.weatherSelected.current_temp = Math.round(this.weatherSelected.current_temp * 9 / 5 + 32);
          this.temperatureMode = 'Fahrenheit';
        }
        break;
    }
  }
}
