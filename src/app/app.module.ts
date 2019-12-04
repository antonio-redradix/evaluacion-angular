import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDayComponent } from './weather-day/weather-day.component';
import { WeatherWeekComponent } from './weather-week/weather-week.component';

const appRoutes: Routes = [
  //{ path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: '/weather/1', pathMatch: 'full' },
  { path: 'weather', redirectTo: '/weather/1', pathMatch: 'full' },
  { path: 'weather/:id', component: WeatherComponent },
  
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDayComponent,
    WeatherWeekComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
      ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
