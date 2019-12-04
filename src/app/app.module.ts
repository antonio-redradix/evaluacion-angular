import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDayComponent } from './weather-day/weather-day.component';
import { WeatherWeekComponent } from './weather-week/weather-week.component';

const appRoutes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'weather/:id', component: WeatherComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' }
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
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
