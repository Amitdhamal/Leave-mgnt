import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpMasterModule } from './sign-up-master/sign-up-master.module';
import { SignUpMasterComponent } from './sign-up-master/sign-up-master/sign-up-master.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignUpMasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
