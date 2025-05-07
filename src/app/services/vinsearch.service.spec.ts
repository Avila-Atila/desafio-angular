import { TestBed } from '@angular/core/testing';

import { VinsearchService } from './vinsearch.service';

describe('VinsearchService', () => {
  let service: VinsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
