import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatePanelComponent } from './state-panel/state-panel.component';
import { PrevisionPanelComponent } from './prevision-panel/prevision-panel.component';
import { WeatherPanelComponent } from './weather-panel/weather-panel.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const appRoutes: Routes = [  
  { path: 'weather', component: WeatherPanelComponent },  
  { path: 'weather/:id', component: WeatherPanelComponent },  
  { path: 'state', component: StatePanelComponent }, 
  { path: 'prevision', component: PrevisionPanelComponent },
  { path: '',   redirectTo: '/weather', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    StatePanelComponent,
    PrevisionPanelComponent,
    WeatherPanelComponent
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
