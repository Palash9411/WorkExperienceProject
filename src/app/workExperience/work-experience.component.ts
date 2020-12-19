import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Service/user-data.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor(private userDataSevice :UserDataService) { }
  userData :Array<any> = [];
  user :string;
  showAddForm : boolean = false ;
  ngOnInit(): void {
    this.user= this.userDataSevice.userName;
    this.userData = this.userDataSevice.userJobData;
  }
  showForm(){
    this.showAddForm= true ;
  }
  // method when new job-exp is added 
  addJobData(obj){
    this.userDataSevice.addJobData(obj).subscribe(data=>{
      this.userDataSevice.getUserJobData(this.userDataSevice.userMailAdd).subscribe(data=>{
        this.userData = this.userDataSevice.userJobData;
      })
    });
    this.showAddForm = false;
  }
}
