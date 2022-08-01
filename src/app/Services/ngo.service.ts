import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { NgoReg } from '../ngo/ngo-register/ngo-register';

@Injectable({
  providedIn: 'root'
})

export class NgoRegService {

  baseURL:string="http://localhost:8051/ngo-api/add";
  constructor(private httpClient: HttpClient ) {}

  registerNgo(ngoData:NgoReg){
    console.log(ngoData);
    return this.httpClient.post(this.baseURL,ngoData);
  }
}