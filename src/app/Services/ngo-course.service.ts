import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Observer } from 'rxjs';
import { CourseReg } from '../ngo/ngo-course/ngo-course';
import { NgoCourseDTO } from '../ngo/ngo-course/NgoCourseDTO';



@Injectable({
  providedIn: 'root'
})

export class CourseRegService {

  baseURL:string="http://localhost:8051/ngoCourse-api/addNgoCourse";
  constructor(private httpClient: HttpClient ) {}

  registerCourse(courseData:NgoCourseDTO)
  {
    console.log(courseData);
    return this.httpClient.post(this.baseURL,courseData);
  }

  

}