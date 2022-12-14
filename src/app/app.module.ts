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
import { HttpClientModule } from '@angular/common/http';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { NgoComponent } from './ngo/ngo.component';
<<<<<<< HEAD
import { NgoRegComponent } from './ngo/ngo-register/ngo-register.component';
import { NgoLoginComponent } from './ngo/ngo-login/ngo-login.component';
import { NgoCourseComponent } from './ngo/ngo-course/ngo-course.component';


=======
import { FileUploadModule } from 'ng2-file-upload';
import { FileSelectDirective } from 'ng2-file-upload';
>>>>>>> 9c920576c8a69124e3b7ad2c1649d896e4a56acf


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
    FooterComponent,
    RegisterAdminComponent,
    NgoComponent,
    NgoRegComponent,
    NgoLoginComponent,
    NgoCourseComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
