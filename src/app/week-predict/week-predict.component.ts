import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherDay } from '../weather-widget/WeatherDay';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-week-predict',
  templateUrl: './week-predict.component.html',
  styleUrls: ['./week-predict.component.scss']
})
export class WeekPredictComponent implements OnInit {
  @Input() Days: WeatherDay[];
  @Output() SelectedDay = new EventEmitter<WeatherDay>();
  @Input() DayClicked : Number
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => { 
        console.log(params.get(`id`))
        if(params.get(`id`)){
          this.DayClicked = parseInt(params.get(`id`))
        }else{
          this.DayClicked = 0
        }
      })
  }

  selectDay(day : WeatherDay, dayclicked : number){
    this.DayClicked = dayclicked
    this.SelectedDay.emit(day)
  }

}
