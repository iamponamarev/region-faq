import { TestBed } from '@angular/core/testing';

import { FaqStoreService } from './faq-store.service';

describe('FaqStoreService', () => {
  let service: FaqStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
