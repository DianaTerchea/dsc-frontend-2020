import { TestBed } from '@angular/core/testing';

import { NonauthGuardService } from './nonauth-guard.service';

describe('NonauthGuardService', () => {
  let service: NonauthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonauthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
