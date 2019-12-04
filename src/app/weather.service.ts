import { Injectable } from '@angular/core';
import { Weather } from './weather/weather';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  weather: Array<Weather>;
  constructor(private http: HttpClient) {
   }

   // tslint:disable-next-line: ban-types
   getWeather(): Observable<Object> {
    return this.http.get('https://api.myjson.com/bins/qds5w');
    }

    getsrc(w: Weather): string {
      let url: string;
      if (w.weather === 'Cloudy' || w.weather === 'Mostly Cloudy') {
        url = '../assets/img/cloudy.png';
      } else if (w.weather === 'Scattered Showers') {
        url = '../assets/img/rain_light.png';
      } else if (w.weather === 'Partly Cloudy') {
        url = '../assets/img/partly_cloudy.png';
      } else if (w.weather === 'Sunny') {
        url = '../assets/img/sunny.png';
      } else {
        url = '../assets/img/rain_s_cloudy.png';
      }
      return url;
    }
}
