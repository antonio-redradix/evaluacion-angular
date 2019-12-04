import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherdetailComponent } from './weatherdetail/weatherdetail.component';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'weather/:id', component: WeatherComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
 ];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherdetailComponent,
    WeatherlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
      ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
