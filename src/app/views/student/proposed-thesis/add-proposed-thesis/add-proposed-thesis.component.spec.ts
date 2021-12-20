import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProposedThesisComponent } from './add-proposed-thesis.component';

describe('AddProposedThesisComponent', () => {
  let component: AddProposedThesisComponent;
  let fixture: ComponentFixture<AddProposedThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProposedThesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProposedThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
