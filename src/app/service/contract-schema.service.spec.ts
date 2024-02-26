import { TestBed } from '@angular/core/testing';

import { ContractSchemaService } from './contract-schema.service';

describe('ContractSchemaService', () => {
  let service: ContractSchemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractSchemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
