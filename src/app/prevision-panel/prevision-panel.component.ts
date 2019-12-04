import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-prevision-panel',
  templateUrl: './prevision-panel.component.html',
  styleUrls: ['./prevision-panel.component.scss']
})
export class PrevisionPanelComponent implements OnInit {
	@Input() daysArray
	@Input() selectedDay
	@Input() currentGrades

	constructor(private route: ActivatedRoute) { }
	ngOnInit() { }
}
