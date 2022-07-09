import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.css']
})
export class HodDashboardComponent implements OnInit {
  staffArr :any;


  constructor(private httpServe : HttpService, private router : Router) { }

  ngOnInit(): void {
    this.getstaff()

    
  }

  getstaff(){
    this.httpServe.getstaff().subscribe((data)=>{
      
      this.staffArr = data
    })
  }

  deleteUser(emp : any){
    this.httpServe.deletestaff(emp.id).subscribe(()=>{ 
      this.getstaff()
      alert('user has been deleted')
     })
    
  }
  viewStaff(empId: Number){
 

    this.httpServe.getUserDetail(empId).subscribe((data)=>{
     
   
      this.router.navigate(['/details'])


    })
    
  }

}
