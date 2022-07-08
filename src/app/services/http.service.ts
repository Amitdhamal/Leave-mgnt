import { Injectable } from '@angular/core';
import  { HttpClient,} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

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
}
