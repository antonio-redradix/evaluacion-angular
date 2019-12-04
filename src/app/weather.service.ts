import { Injectable } from '@angular/core';
import { WeatherDay } from './weather-widget/WeatherDay';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  Days : WeatherDay[]
  constructor(private httpClient : HttpClient) { }

  getWeather():Observable<Object>{
    return this.httpClient.get("https://api.myjson.com/bins/qds5w")
  }
}
