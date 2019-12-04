import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import {
  Weather
} from '../weather/weather';

import {
  WeatherService
} from '../weather.service';

@Component( {
    selector: 'app-weatherdetail',
    templateUrl: './weatherdetail.component.html',
    styleUrls: ['./weatherdetail.component.scss']
  }

) export class WeatherdetailComponent implements OnInit {
  iscelsius: boolean;
  @Input() selected: Weather;

  constructor(private weatherService: WeatherService) {
    this.iscelsius = true;
  }

  ngOnInit() {
  }

  getsrc(): string {
    return this.weatherService.getsrc(this.selected);
  }

  change() {
    if (this.selected !== undefined) {
      if (this.selected.celsius === true || this.selected.celsius === undefined) {
        this.selected.celsius = false;
        this.selected.current_temp = Math.round((this.selected.current_temp * 1.8) + 32);
       } else {
        this.selected.celsius = true;
        this.selected.current_temp = Math.round((this.selected.current_temp - 32) / 1.8 );
      }


    }

  }
  }


