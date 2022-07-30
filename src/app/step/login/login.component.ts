import { Component, ɵConsole } from '@angular/core';
import { Login } from './login';
//import { LoginService } from './login-service';
import { Router } from '@angular/router';


@Component({
    selector: 'user-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    login: Login = new Login();
    responses!: ResponseType;
    response!: string;

    constructor(private router: Router) {

    }

  }