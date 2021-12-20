import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCommentsProposedThesisComponent } from './details-comments-proposed-thesis.component';

describe('DetailsCommentsProposedThesisComponent', () => {
  let component: DetailsCommentsProposedThesisComponent;
  let fixture: ComponentFixture<DetailsCommentsProposedThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCommentsProposedThesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCommentsProposedThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
