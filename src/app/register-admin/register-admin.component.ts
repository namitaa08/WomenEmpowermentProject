import { Component, OnInit } from '@angular/core';
import { AdminReg } from './register-admin';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  adminReg:AdminReg = new AdminReg();
  
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  adminRegister(){
    console.log(this.adminReg);
    this.registerService.registerAdmin(this.adminReg).subscribe(data=>{
      alert("Registration successful!");
    },error=>alert(""));
  }
}
