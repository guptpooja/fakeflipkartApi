import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './pages/front/front.component';
import {HttpClientModule} from '@angular/common/http';
import { PatientComponent } from './pages/patient/patient.component';
import { NavbarComponent } from './component/navbar/navbar.component'
@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    PatientComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
