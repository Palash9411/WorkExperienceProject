import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SharedComponent } from './login&signup-component/shared/shared.component'
import { WorkExperienceComponent } from './workExperience/work-experience.component';

const routes: Routes = [
  {
    path: '',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login', component: SharedComponent
  },
  {
    path:'signup', component: SharedComponent
  }
  ,
  {
    path:'experience',component:WorkExperienceComponent
  },
  {
    path:'workExperience',component:WorkExperienceComponent
  },
  {
    path: '**',redirectTo:'login',pathMatch:'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
