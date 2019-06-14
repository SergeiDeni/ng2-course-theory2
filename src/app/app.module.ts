import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule} from "@angular/router";

const routes = [
  {path: '', component: CarComponent},
  {path: 'login', component: LoginPageComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
