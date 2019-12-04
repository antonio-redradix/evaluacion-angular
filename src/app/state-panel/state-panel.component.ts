import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-state-panel',
  templateUrl: './state-panel.component.html',
  styleUrls: ['./state-panel.component.scss']
})
export class StatePanelComponent implements OnInit {
	@Input() selectedDay
	@Output() changeSelectedGrades = new EventEmitter<any>()
	currentGrades : string = 'Celsius';

	constructor(private route: ActivatedRoute) { }

	ngOnInit() { }

	changeFahrenheit(grades){
		this.currentGrades = 'Fahrenheit';
		this.changeSelectedGrades.emit('Fahrenheit')
	}
	changeCelsius(grades){
		this.currentGrades = 'Celsius';
		this.changeSelectedGrades.emit('Celsius')
	}
}
