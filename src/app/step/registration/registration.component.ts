import { Component, OnInit } from '@angular/core';
import { Registration } from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  router: any;
  ngOnInit() {

  }

  array = { password: "" };

  keyPress(event: any) {
      const pattern = /[0-9\+\-\ ]/;
      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) {
          event.preventDefault();
      }
  }

  registration: Registration = new Registration();
  response!: string;
  /*constructor(private ngs: RegistrationService) {}

  add() {

      this.ngs.sendToServer(this.registration).subscribe(
          data => {

              this.response = data['status'];
              this.reloadPage();
          }
      );
  }

  reloadPage() {
      window.location.href = './step/success';
  }*/
}
