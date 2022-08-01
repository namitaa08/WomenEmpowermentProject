import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css']
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
