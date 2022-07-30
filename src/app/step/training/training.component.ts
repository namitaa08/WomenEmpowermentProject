import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login';
//import { FetchCoursesService } from './fetch-courses-service';
//import { Courses } from './courses';


@Component({
  selector: 'training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  userlogin: Login = new Login();
  response!: string;

  ngOnInit() {}
    /*this.displayName();
  }

  displayName() {
    this.userlogin = JSON.parse(localStorage.getItem('userDetails'))['token'];
    this.response = this.userlogin.username;
  }
}*/
}