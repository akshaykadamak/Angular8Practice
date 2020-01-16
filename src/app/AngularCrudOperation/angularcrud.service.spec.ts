import { TestBed } from '@angular/core/testing';

import { AngularcrudService } from './angularcrud.service';

describe('AngularcrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularcrudService = TestBed.get(AngularcrudService);
    expect(service).toBeTruthy();
  });
});
