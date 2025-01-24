import { TestBed } from '@angular/core/testing';

import { GetInvoicingDataService } from './get-invoicing-data.service';

describe('GetInvoicingDataService', () => {
  let service: GetInvoicingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInvoicingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
