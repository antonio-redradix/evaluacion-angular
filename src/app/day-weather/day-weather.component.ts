import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WeatherInterface } from '../../interfaces/interfaces';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.scss']
})
export class DayWeatherComponent implements OnInit {

  numSelected: number;
  fahrenheitDegrees: number;
  celsiusDegrees:number; 

  @Input() weekWeatherArr: WeatherInterface[];

  constructor(private route: ActivatedRoute) { }
      
  changeDegrees () {
    (this.fahrenheitDegrees)? this.fahrenheitDegrees = undefined : this.fahrenheitDegrees = (this.celsiusDegrees*9/5)+32;  
  };

  ngOnInit() {
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.numSelected = Number(params.get('id'));
    });
  }

  ngDoCheck () {
    if(this.weekWeatherArr) this.celsiusDegrees = this.weekWeatherArr[this.numSelected].current_temp;

      
  }
}
