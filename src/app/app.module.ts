import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { WeatherWeekComponent } from './weather-week/weather-week.component';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'list/:id', component: WeatherComponent },
  { path: '**', redirectTo: '/list/1' }
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherInfoComponent,
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
