import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProposedThesisComponent } from './details-proposed-thesis.component';

describe('DetailsProposedThesisComponent', () => {
  let component: DetailsProposedThesisComponent;
  let fixture: ComponentFixture<DetailsProposedThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsProposedThesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProposedThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
