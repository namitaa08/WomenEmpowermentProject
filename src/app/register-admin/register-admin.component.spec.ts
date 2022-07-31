import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdminComponent } from './register-admin.component';

describe('RegisterUserComponent', () => {
  let component: RegisterAdminComponent;
  let fixture: ComponentFixture<RegisterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
