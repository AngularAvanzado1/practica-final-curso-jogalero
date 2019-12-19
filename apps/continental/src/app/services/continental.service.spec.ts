import { TestBed } from '@angular/core/testing';

import { ContinentalService } from './continental.service';

describe('ContinentalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContinentalService = TestBed.get(ContinentalService);
    expect(service).toBeTruthy();
  });
});
