import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
//import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ministry of Women and Child Development';
  myimage:string= "assets/images/img1.jpg"
}


