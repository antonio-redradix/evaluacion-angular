import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../interfaces/Weather';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
  @Input() weatherList : Weather[];
  @Input() weatherSelected : Weather[];

  constructor() { }

  ngOnInit() {
  }
}
