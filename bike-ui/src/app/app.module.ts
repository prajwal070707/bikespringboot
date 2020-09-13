import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { BikeService } from './services/bike.service';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { MyfooterComponent } from './components/myfooter/myfooter.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MyaccountComponent,
    MyfooterComponent,
    HomeComponent,
    ViewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

  providers: [BikeService],
  bootstrap: [AppComponent, AdminComponent, MyaccountComponent, MyfooterComponent]
})
export class AppModule { }
