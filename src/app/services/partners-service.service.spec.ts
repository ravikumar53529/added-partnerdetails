import { TestBed } from '@angular/core/testing';

import { PartnersServiceService } from './partners-service.service';

describe('PartnersServiceService', () => {
  let service: PartnersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
