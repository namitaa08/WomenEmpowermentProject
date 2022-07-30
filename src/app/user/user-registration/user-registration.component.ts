import { Component, OnInit } from '@angular/core';

import { UserRegistration } from './user-registration';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
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

  user_registration: UserRegistration = new UserRegistration();
  response!: string;

}
