import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes }from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepComponent } from './step/step.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './step/login/login.component';
import { GuidelinesComponent } from './step/guidelines/guidelines.component';
import { RegistrationComponent } from './step/registration/registration.component';
import { TrainingComponent } from './step/training/training.component';
import { UserComponent } from './user/user.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { FooterComponent } from './footer/footer.component'



@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    HeaderComponent,
    MainComponent,
  
    LoginComponent,
    GuidelinesComponent,
    RegistrationComponent,
    TrainingComponent,
    UserComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    FooterComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
