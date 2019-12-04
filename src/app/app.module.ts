import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { WeekComponent } from './week/week.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'weather/:id', component: WeatherComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
 ]
 

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    WeekComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // Muestra información de las rutas en consola, uso para debug
      ),     
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
