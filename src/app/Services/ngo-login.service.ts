import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { NgoLogin } from '../ngo/ngo-login/ngo-login';


@Injectable({
  providedIn: 'root'
})


 
 export class LoginService {

  
  constructor(private http: HttpClient) {
  }

  verifyMe(user: NgoLogin) {
    alert("Step2");
    let url = 'http://localhost:8051/ngo-api/fetch';
    console.log(this.http.get<any>(url));
    return this.http.get<any>(url);

  }
}