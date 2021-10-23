import { TestBed } from '@angular/core/testing';

import { GardienService } from './gardien.service';

describe('GardienService', () => {
  let service: GardienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GardienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
