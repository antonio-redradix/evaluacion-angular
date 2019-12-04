import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDaysService {

  constructor(private http: HttpClient) { }

  getDays():Observable<any> {
    return this.http.get('https://api.myjson.com/bins/qds5w')
  }
}
