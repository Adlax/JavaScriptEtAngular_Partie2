import { TestBed } from '@angular/core/testing';

import { C16ServiceService } from './c16-service.service';

describe('C16ServiceService', () => {
  let service: C16ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C16ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
