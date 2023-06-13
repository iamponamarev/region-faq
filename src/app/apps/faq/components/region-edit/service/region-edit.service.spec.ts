import { TestBed } from '@angular/core/testing';

import { RegionEditService } from './region-edit.service';

describe('RegionEditService', () => {
  let service: RegionEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
