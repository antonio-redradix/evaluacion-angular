import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WeatherInterface } from '../../interfaces/interfaces';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.scss']
})
export class WeekWeatherComponent implements OnInit {
 
  numSelected: number;

  @Input() weekWeatherArr: WeatherInterface[];

  constructor(private route: ActivatedRoute) { }

  selectDay (e) {
    this.weekWeatherArr.map((elem) => elem.render = false);
    this.weekWeatherArr[e].render = true;
  }

  ngOnInit() {
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.numSelected = Number(params.get('id'));
    });

    console.log(this.numSelected+'del week');
  }

  ngDoCheck() {
    if(this.numSelected && this.weekWeatherArr) this.weekWeatherArr[this.numSelected].render = true;
  };

}
