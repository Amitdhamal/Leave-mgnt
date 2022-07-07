import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-sign-up-master',
  templateUrl: './sign-up-master.component.html',
  styleUrls: ['./sign-up-master.component.css']
})
export class SignUpMasterComponent implements OnInit {
  selectedForm :Number = 1
  mySignUpForm : any
  constructor(private router : Router,private http : HttpService) { }

  ngOnInit(): void {
    this.mySignUpForm = new FormGroup({
      name : new FormControl(''),
      userName : new FormControl(''),
      department : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
      userSelection : new FormControl('')
    })
    
  }

 

  navigateToSignIn(){
    this.router.navigate([''])
  }

  onSubmitHODForm(){
    if(this.selectedForm == 1){
      this.http.posthods(this.mySignUpForm.value).subscribe(()=>{
        console.log('data posted')
      })
    }
    else{
      this.http.poststaff(this.mySignUpForm.value).subscribe(()=>{
        console.log('data posted')
      })
    }
    
    this.mySignUpForm.reset()
   
  }
}
