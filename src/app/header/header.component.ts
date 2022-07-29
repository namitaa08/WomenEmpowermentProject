import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  
   }

  ngOnInit(): void {
  }

}
