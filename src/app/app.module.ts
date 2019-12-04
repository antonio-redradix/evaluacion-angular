import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherWeekComponent } from './weather-week/weather-week.component';
import { WeatherDayComponent } from './weather-day/weather-day.component';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'list', component: WeatherComponent },
  { path: 'list/:id', component: WeatherComponent },
  // { path: 'add', component: AddformComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherWeekComponent,
    WeatherDayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // Muestra información de las rutas en consola, uso para debug
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
