import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { DayPredictComponent } from './day-predict/day-predict.component';
import { WeekPredictComponent } from './week-predict/week-predict.component';

const appRoutes =[
  { path: 'weather/:id', component: WeatherWidgetComponent },
  { path: 'weather', component: WeatherWidgetComponent},
  { path: '',   redirectTo: '/weather', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent } 
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    DayPredictComponent,
    WeekPredictComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing : false}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
