import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpMasterModule } from './sign-up-master/sign-up-master.module';
import { SignUpMasterComponent } from './sign-up-master/sign-up-master/sign-up-master.component';
import { HodDashboardComponent } from './userdashboard/hod-dashboard/hod-dashboard.component';
import { StaffDashboardComponent } from './userdashboard/staff-dashboard/staff-dashboard.component';
import { UserDashboardModule } from './userdashboard/user-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignUpMasterModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
