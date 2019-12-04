import { Component, OnInit } from '@angular/core';
import { Day } from '../interfaces';
import { WeatherDaysService } from '../weather-days.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  days: Day[]
  selectedDay : Day
  degrees : number = 0 //0 for Celsius, 1 for Farenheit

  constructor(private daysService : WeatherDaysService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.daysService.getDays().subscribe((data: Day[]) => {
      this.days = data
      this.route.paramMap
      .subscribe((params: ParamMap) => {
        let id = parseInt(params.get('id'))
        this.selectedDay = this.days[id-1]
        if (this.selectedDay == undefined) {
          this.selectedDay = this.days[0]
        }
      })
    })
  }

  updateSelectedDay(day: Day): void {
    this.selectedDay = day
  }

  updateSelectedDegrees(type: number): void{
    if (this.degrees != type) {
      this.degrees = type
      this.days.forEach(element => {
        element.current_temp = this.changeToDegrees(type, element.current_temp)
        element.min_temp = this.changeToDegrees(type, element.min_temp)
        element.max_temp = this.changeToDegrees(type, element.max_temp)
      }) 
    }
  }

  changeToDegrees(type:number, toChange:number): number{
    switch (type) {
      case 0:
        return parseInt(((toChange - 32) * 5 / 9).toFixed(0))
        break;
      case 1:
        return toChange* 9 / 5 + 32
        break;
    
      default:
        return 0        
        break;
    }
  }
}