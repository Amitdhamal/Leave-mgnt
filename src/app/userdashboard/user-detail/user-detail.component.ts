import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  selectedUser: any;
 

  constructor(private httpServe : HttpService) { }
 

  ngOnInit(): void {
    this.selectedUser = this.httpServe.selectedUser;
    console.log(this.selectedUser)
  }


}
