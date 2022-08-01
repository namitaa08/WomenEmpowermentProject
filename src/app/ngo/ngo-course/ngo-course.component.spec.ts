import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoCourseComponent } from './ngo-course.component';

describe('NgoCourseComponent', () => {
  let component: NgoCourseComponent;
  let fixture: ComponentFixture<NgoCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
