import { Component, OnInit } from '@angular/core';

import { UserRegService } from 'src/app/Services/user-service';
import { UserReg } from './user-registration';

@Component({
  selector: 'app-register-user',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegComponent implements OnInit {

  userReg:UserReg = new UserReg();
  
  constructor(private userRegService: UserRegService) { }

  ngOnInit(): void {
  }


  userRegister(){
    console.log(this.userReg);
    this.userRegService.registerUser(this.userReg).subscribe(data=>{
      alert("Registration successful!");
    },error=>alert(""));
  }
}
