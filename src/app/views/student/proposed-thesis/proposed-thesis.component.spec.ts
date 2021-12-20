import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedThesisComponent } from './proposed-thesis.component';

describe('ProposedThesisComponent', () => {
  let component: ProposedThesisComponent;
  let fixture: ComponentFixture<ProposedThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposedThesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
