import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { StepReg } from '../step/registration/registration';


@Injectable({
  providedIn: 'root'
})

export class StepRegService {

  baseURL:string="http://localhost:8051/step-api/add";
  constructor(private httpClient: HttpClient ) {}

  registerStep(stepData:StepReg){
    console.log(stepData);
    return this.httpClient.post(this.baseURL,stepData);
  }
}
