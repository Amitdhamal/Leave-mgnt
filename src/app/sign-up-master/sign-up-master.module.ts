import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpMasterComponent } from './sign-up-master/sign-up-master.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';


const routeSignUpMaster : Routes = [
  {
    path:"",pathMatch: "full",component : SignInComponent
  },
  {
    path:"signUp",component : SignUpMasterComponent
  }

]
 

@NgModule({
  declarations: [
  SignUpMasterComponent,SignInComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routeSignUpMaster)
  ]
})
export class SignUpMasterModule { }
