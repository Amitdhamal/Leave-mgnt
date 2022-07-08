import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  mySignInForm :any
  selectedForm :any
  constructor(private router : Router, private http : HttpService) { }

  ngOnInit(): void {
    this.mySignInForm = new FormGroup ({
      email : new FormControl,
      password : new FormControl,
      userSelection: new FormControl
    })
  }

  onsignin(){
    if(this.mySignInForm.value.userSelection == 1){
      this.http.gethods().subscribe((data)=>{
        let user = data.find((info : any)=>{
          if(info.email === this.mySignInForm.value.email && info.password === this.mySignInForm.value.password){
              console.log(info.userSelection)
              this.router.navigate(['dashboard/hod'])
            }
          return (info.email === this.mySignInForm.value.email && info.password === this.mySignInForm.value.password)
        })
      })
    }

    if(this.mySignInForm.value.userSelection == 2){
      this.http.getstaff().subscribe((data)=>{
        let user = data.find((info : any)=>{
          if(info.email === this.mySignInForm.value.email && info.password === this.mySignInForm.value.password){
              console.log(info.userSelection)
              this.router.navigate(['dashboard/staff'])
            }
          return (info.email === this.mySignInForm.value.email && info.password === this.mySignInForm.value.password)
        })
      })
    }
    
    
  }

  navigateToSignUp(){
    this.router.navigate(['/signUp'])
  }

}
