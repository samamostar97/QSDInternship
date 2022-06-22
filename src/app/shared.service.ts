import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:4200/api";


  constructor(private http:HttpClient) { }

  getEventList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Event');
  }

  addEvent(val:any){
    return this.http.post(this.APIUrl+'/Event',val);
  }

  updateEvent(val:any){
    return this.http.put(this.APIUrl+'/Event',val);
  }

  deleteEvent(val:any){
    return this.http.delete(this.APIUrl+'/Event/'+val);
  }

  getUserList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/User');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+'/User/register',val);
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl+'/User',val);
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl+'/User/{val}');
  }

  authenticateUser(val:any){
    return this.http.post(this.APIUrl+'/User/authenticate',val);
  }
  forgotPassword(val:any){
    return this.http.post(this.APIUrl+'/User/forgot-password',val);
  }

  addVenue(val:any){
    return this.http.post(this.APIUrl+'/Venue',val);
  }



}
