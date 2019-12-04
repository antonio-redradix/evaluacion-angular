import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeek(){
    let observable = this.http.get("https://api.myjson.com/bins/qds5w")
    observable.subscribe(data => console.log(data))
    return observable
  }
}
