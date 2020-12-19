import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public apiUrl : string = "http://34.121.49.132" ;
  public userJobData ;
  public userName :string = '';
  public userMailAdd : string = '';

  constructor(private http: HttpClient) { }
  // signup method
  postNewUserData(body){
    return this.http
    .post(this.apiUrl+'/sign_up',body)
    .pipe(map(response => {
      return response;
    }));
  }
  // login function
  signIn(body){
    return this.http
    .post(this.apiUrl+'/login',body)
    .pipe(map(response=>{
      return response ;
    }))
  }
  // method to get user name
  getUserData(email){
    return this.http
    .get(this.apiUrl+'/user?email_id='+email)
    .pipe(map(data=>{
      return data ;
    }));
  }
  // method to get job data
  getUserJobData(email){
   return this.http
    .get(this.apiUrl+'/user_job_history?email_id='+email)
    .pipe(map(data=>{
      this.userJobData = data['past_jobs'] ;
      return data ;
    }))
  }
  // add new data 
  addJobData(body){
    return this.http
    .post(this.apiUrl+'/user_job_history',body)
    .pipe(map(data=>{
      return data ;
    }));
  }
}