import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './login&signup-component/shared/shared.component';
import { FormComponent } from './login&signup-component/shared/formComponent/common-form/form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { WorkExperienceComponent } from './workExperience/work-experience.component';
import {
  HttpClient,
  HttpClientModule
} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    FormComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
