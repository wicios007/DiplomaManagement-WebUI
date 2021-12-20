import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowThesisComponent } from './show-thesis.component';

describe('ShowThesisComponent', () => {
  let component: ShowThesisComponent;
  let fixture: ComponentFixture<ShowThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowThesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
