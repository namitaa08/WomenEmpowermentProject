import { TestBed } from '@angular/core/testing';
import { CourseRegService } from './ngo-course.service';


describe('CourseRegService', () => {
  let service: CourseRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});