import { TestBed } from '@angular/core/testing';

import { ProposedThesisService } from './proposed-thesis.service';

describe('ProposedThesisService', () => {
  let service: ProposedThesisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProposedThesisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
