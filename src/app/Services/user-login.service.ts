import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { UserLogin } from '../user/user-login/user-login';


@Injectable({
  providedIn: 'root'
})


 
 export class LoginService {

  
  constructor(private http: HttpClient) {
  }

  verifyMe(user: UserLogin) {
    alert("Step2");
    let url = 'http://localhost:8051/user-api/fetch';
    console.log(this.http.get<any>(url));
    return this.http.get<any>(url);

  }
}
