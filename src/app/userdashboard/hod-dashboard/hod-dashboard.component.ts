import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.css']
})
export class HodDashboardComponent implements OnInit {
  staffArr :any
  constructor(private httpServe : HttpService) { }

  ngOnInit(): void {
    this.getstaff()
    
  }

  getstaff(){
    this.httpServe.getstaff().subscribe((data)=>{
      console.log(data)
      this.staffArr = data
    })
  }

  deleteUser(emp : any){
    this.httpServe.deletestaff(emp.id).subscribe(()=>{ 
      this.getstaff()
      alert('user has been deleted')
     })
    
  }

}
