import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'step-page',
  templateUrl: './step.component.html',
  styleUrls: [ './step.component.css']
})
export class StepComponent implements OnInit{

  constructor(private router: Router) {
  
  }
    ngOnInit(){

    }
}