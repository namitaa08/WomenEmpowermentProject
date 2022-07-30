import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from './user-login';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  userlogin: UserLogin = new UserLogin();
  responses!: ResponseType;
  response!: string;

  constructor(private router: Router) {

  }

}
