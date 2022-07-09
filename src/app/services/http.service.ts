import { Injectable } from '@angular/core';
import  { HttpClient,} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  selectedUser : any;
  constructor(private http : HttpClient) { }
  Urlhods = 'http://localhost:3000/hods'
  Urlstaff = 'http://localhost:3000/staff'
  

  posthods(data: any){
    return this.http.post<any>(this.Urlhods,data)
  }

  poststaff(data: any){
    return this.http.post<any>(this.Urlstaff,data)
  }

  deletestaff(id :number){
    return this.http.delete<any>(this.Urlstaff+'/'+id)
  
  }

  gethods(){
    return this.http.get(this.Urlhods).pipe(map((res:any)=>{ return res}))
  }

  getstaff(){
    return this.http.get(this.Urlstaff).pipe(map((res:any)=>{ return res}))
  }
  getUserDetail(empId : Number){
   return this.http.get<any>(this.Urlstaff + '/' + empId).pipe(map((res:any)=>{ 
    console.log(res)
    this.selectedUser = res;
    console.log(this.selectedUser)
  }));
   

  }
}
