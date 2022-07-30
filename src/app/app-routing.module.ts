import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepComponent } from './step/step.component';
import { RegistrationComponent } from './step/registration/registration.component';
import { LoginComponent } from './step/login/login.component'
import { GuidelinesComponent } from './step/guidelines/guidelines.component';
import { TrainingComponent } from './step/training/training.component';

const routes: Routes = [
    { path: 'step', component: StepComponent},
    { path: 'step/registration', component: RegistrationComponent},
    {path: 'step/login', component: LoginComponent},
    {path : 'step/guidelines', component: GuidelinesComponent},
     {path : 'step/training', component: TrainingComponent}];
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
