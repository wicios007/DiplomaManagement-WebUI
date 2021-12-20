import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProposedThesisComponent } from './show-proposed-thesis.component';

describe('ShowProposedThesisComponent', () => {
  let component: ShowProposedThesisComponent;
  let fixture: ComponentFixture<ShowProposedThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProposedThesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProposedThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
