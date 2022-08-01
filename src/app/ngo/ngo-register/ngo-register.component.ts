import { Component, OnInit } from '@angular/core';
import { NgoRegService } from 'src/app/Services/ngo.service';

import { NgoReg } from './ngo-register';

@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css']
})
export class NgoRegComponent implements OnInit {

  ngoReg:NgoReg = new NgoReg();
  
  constructor(private ngoRegService: NgoRegService) { }

  ngOnInit(): void {
  }

  ngoRegister(){
    console.log(this.ngoReg);
    this.ngoRegService.registerNgo(this.ngoReg).subscribe((data: any)=>{
      alert("Registration successful!");
    },(error: any)=>alert(""));
  }
}