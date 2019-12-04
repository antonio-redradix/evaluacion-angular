import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherWeekComponent } from './weather-week/weather-week.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

const appRoutes: Routes = [
  { path: 'weather/:id', component: WeatherComponent },
  { path: '', redirectTo: 'weather/0', pathMatch: 'full' },
  ]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherWeekComponent,
    WeatherDetailComponent
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
