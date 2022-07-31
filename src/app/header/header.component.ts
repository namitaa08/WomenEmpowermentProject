import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepComponent } from '../step/step.component';
// import {Component} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // selector: 'ngbd-dropdown-basic',
  // templateUrl: './dropdown-basic.html'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  
   }

  ngOnInit(): void {

  this.router.navigateByUrl('./step')
  }
}
export class NgbdDropdownBasic {
}