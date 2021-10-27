import { TestBed } from '@angular/core/testing';

import { C17Service } from './c17.service';

describe('C17Service', () => {
  let service: C17Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C17Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
