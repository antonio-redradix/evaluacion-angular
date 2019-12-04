import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDaysService {

  constructor(private http: HttpClient) { }

  getDays() {
    return this.http.get('https://api.myjson.com/bins/qds5w')
  }
}
