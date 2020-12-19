import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  public showLogin : boolean = false;
  constructor(private router : Router) { }

  ngOnInit(): void {
    if(window.location.href.match('login')){
      this.showLogin = true  ;
    }else{
      this.showLogin = false ;
    }
  }
  // redirect method according to url 
  redirectTo(type){
    type.toLowerCase()=="signup" ? this.router.navigate(['signup']) : this.router.navigate(['login']);
  }
}
