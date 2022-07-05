import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-master',
  templateUrl: './sign-up-master.component.html',
  styleUrls: ['./sign-up-master.component.css']
})
export class SignUpMasterComponent implements OnInit {
  selectedForm :Number = 1
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  getform(formid : number){
      this.selectedForm = formid
  }

  navigateToSignIn(){
  
      this.router.navigate([''])
  }
}
