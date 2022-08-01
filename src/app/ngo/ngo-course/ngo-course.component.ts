import { Component, OnInit } from '@angular/core';
import { CourseRegService } from 'src/app/Services/ngo-course.service';

import { CourseReg } from './ngo-course';
import { NgoCourseDTO } from './NgoCourseDTO';


@Component({
  selector: 'app-ngo-course',
  templateUrl: './ngo-course.component.html',
  styleUrls: ['./ngo-course.component.css']
})
export class NgoCourseComponent implements OnInit {

  courseReg:NgoCourseDTO = new NgoCourseDTO();
  
  constructor(private courseRegService: CourseRegService) { }

  ngOnInit(): void {
  }


  courseRegister(){
    console.log(this.courseReg);
    this.courseRegService.registerCourse(this.courseReg).subscribe((data: any)=>{
      alert("Registration successful!");
    },(error: any)=>alert(""));
  }
}




