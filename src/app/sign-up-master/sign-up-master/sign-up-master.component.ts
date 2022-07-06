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
  myForm : any
  constructor(private router : Router,private http : HttpService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name : new FormControl(''),
      userName : new FormControl(''),
      department : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
    })
    this.http.get().subscribe((data)=>{
      console.log(data)
    })
  }

  getform(formid : number){
      this.selectedForm = formid
  }

  navigateToSignIn(){
  
      this.router.navigate([''])
  }

  onSubmitHODForm(){
    
    this.http.postUser(this.selectedForm,this.myForm.value).subscribe(()=>{
      console.log('data posted')
    })
    
   
  }
}
