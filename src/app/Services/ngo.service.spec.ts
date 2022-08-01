import { TestBed } from '@angular/core/testing';
import { NgoRegService } from './ngo.service';


describe('NgoRegService', () => {
  let service: NgoRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
