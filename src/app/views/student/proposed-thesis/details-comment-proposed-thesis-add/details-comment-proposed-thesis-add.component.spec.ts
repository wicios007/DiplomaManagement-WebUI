import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCommentProposedThesisAddComponent } from './details-comment-proposed-thesis-add.component';

describe('DetailsCommentProposedThesisAddComponent', () => {
  let component: DetailsCommentProposedThesisAddComponent;
  let fixture: ComponentFixture<DetailsCommentProposedThesisAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCommentProposedThesisAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCommentProposedThesisAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
