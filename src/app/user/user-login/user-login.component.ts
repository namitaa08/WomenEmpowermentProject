import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/user-login.service';

import { UserLogin } from './user-login';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user =new UserLogin();
  private _service: any;
  responseType: any;
  constructor(private router: Router, private authenticationService: LoginService) {   }

  ngOnInit() {
  }

  loginUser(){
    alert("step1");
    this.authenticationService.verifyMe(this.user).subscribe(
      data => {     
          alert("step3");           
          this.responseType=data;
          alert(this.responseType);
          if (data.responseType == "VERIFIED") {
            this.router.navigate(['/step']);
          }
          else {
              this.router.navigate(['/user-login']);
    
          }
      }
  )

  }
}