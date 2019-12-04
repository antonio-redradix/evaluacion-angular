import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { WeekWeatherComponent } from './week-weather/week-weather.component';
import { DayWeatherComponent } from './day-weather/day-weather.component';

const appRoutes: Routes = [
  { path: 'widget', component: WeatherWidgetComponent },
  { path: 'weather', component: WeatherWidgetComponent },
  { path: 'day', component: WeatherWidgetComponent },
  { path: 'day/:id', component: WeatherWidgetComponent },
  { path: '', redirectTo: 'widget', pathMatch: 'full' },
  { path: '**', redirectTo: 'widget', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    WeekWeatherComponent,
    DayWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
