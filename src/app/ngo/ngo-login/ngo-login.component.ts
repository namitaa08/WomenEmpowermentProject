import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/ngo-login.service';
import { NgoLogin } from './ngo-login';


@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css']
})
export class NgoLoginComponent implements OnInit {

  ngo =new NgoLogin();
  private_service: any;
  responseType: any;
  constructor(private router: Router, private authenticationService: LoginService) {   }

  ngOnInit() {
  }

  loginNgo(){
    alert("step1");
    this.authenticationService.verifyMe(this.ngo).subscribe(
      data => {     
          alert("step3");           
          this.responseType=data;
          alert(this.responseType);
          if (data.responseType == "VERIFIED") {
            this.router.navigate(['/step']);
          }
          else {
              this.router.navigate(['/ngo-login']);
    
          }
      }
  )

  }
}