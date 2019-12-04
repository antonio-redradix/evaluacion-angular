import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Weather
} from '../weather/weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.scss']
})
export class WeatherlistComponent implements OnInit {
  @Input() weather: Array < Weather > ;
  @Input() selected: Weather ;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {

  }

  getsrc(w: Weather): string {
   return this.weatherService.getsrc(w);
  }
}
