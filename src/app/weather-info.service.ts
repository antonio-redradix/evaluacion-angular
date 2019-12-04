import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherInfoService {

  apiUrl: string = 'https://api.myjson.com/bins/qds5w';

  constructor(private http: HttpClient) { }

  getWeatherInfo () {
    return this.http.get(this.apiUrl);
  };

  renderSomethingToTest () {
    console.log('Something');
  }

}
