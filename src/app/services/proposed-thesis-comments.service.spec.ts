import { TestBed } from '@angular/core/testing';

import { ProposedThesisCommentsService } from './proposed-thesis-comments.service';

describe('ProposedThesisCommentsService', () => {
  let service: ProposedThesisCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProposedThesisCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
