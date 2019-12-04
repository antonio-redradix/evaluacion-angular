import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'

import { WeatherService } from'../weather.service'

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.scss']
})
export class WeatherPanelComponent implements OnInit {
	daysArray = []
	currentDay : object
	currentDayIndex : number = 0
	currentGrades : string = 'Celsius';

	constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.weatherService.getWeather().subscribe((days: any[]) =>{ 
			this.daysArray = days
			this.currentDay  = days[0]
			this.updateSelectedDay(days[0])
			this.route.paramMap.subscribe((params: ParamMap) => {
				if(params.get('id')){
					this.currentDay  = this.daysArray[parseInt(params.get('id'))]
					this.updateSelectedDay(this.currentDay)
					this.currentDayIndex = parseInt(params.get('id'))
				} else{
					this.currentDay  = this.daysArray[0]
					this.updateSelectedDay(this.currentDay)
				}
			})
		})

	}

	updateSelectedDay(newDay){
		this.currentDay = newDay
	}

	updateSelectedGrades(newGrades: any) : void{
		this.currentGrades = newGrades
	}

}
