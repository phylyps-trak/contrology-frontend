import { TestBed } from '@angular/core/testing';

import { SemipalatinskService } from './semipalatinsk.service';

describe('SemipalatinskService', () => {
  let service: SemipalatinskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemipalatinskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
