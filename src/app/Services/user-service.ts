import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { UserReg } from '../user/user-registration/user-registration';

@Injectable({
  providedIn: 'root'
})

export class UserRegService {

  baseURL:string="http://localhost:8051/user-api/add";
  constructor(private httpClient: HttpClient ) {}

  registerUser(userData:UserReg){
    console.log(userData);
    return this.httpClient.post(this.baseURL,userData);
  }
}
