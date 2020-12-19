import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../../Service/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private userDataSevice :UserDataService ,
    private router : Router) { }
  public showName : boolean = false ;
  ngOnInit(): void {
    // check if form is of login or signUp 
    if(window.location.href.match('login')){
     this.showName  =  false ;
    }else{
      this.showName = true ;
    }

  }
  // method on form submit 
  onSubmit(form){
    // if submit from login 
    if(this.showName){
      this.userDataSevice.userMailAdd = form.value['email_id'];
      this.userDataSevice.userName = form.value['name'];

      this.userDataSevice.postNewUserData(form.value).subscribe(data=>{
        this.router.navigate(['workExperience']);
      });
    }else{
      // if submit from signup
      this.userDataSevice.signIn(form.value).subscribe(data=>{
        this.userDataSevice.userMailAdd = data['email_id'];
        this.userDataSevice.getUserJobData(data['email_id']).subscribe()
        this.userDataSevice.getUserData(data['email_id']).subscribe(data=>{
          this.userDataSevice.userName=data['name'];
          // navigate to workExp page 
          this.router.navigate(['workExperience']);
        });
       
      });
    }
  }

}
