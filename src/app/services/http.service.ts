import { Injectable } from '@angular/core';
import  { HttpClient,} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }
  Url = 'http://localhost:3000/'
  postUser(selectedForm : Number,data:any){
    if (selectedForm == 1){
      return this.http.post<any>(this.Url+'hods',data) 
    }
    else{
      return this.http.post<any>(this.Url+'staff',data)
    }
    
  }

  get(){
    return this.http.get(this.Url).pipe(map((res:any)=>{ return res}))
  }
}
