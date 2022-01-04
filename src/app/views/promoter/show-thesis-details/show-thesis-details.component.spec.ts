import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowThesisDetailsComponent } from './show-thesis-details.component';

describe('ShowThesisDetailsComponent', () => {
  let component: ShowThesisDetailsComponent;
  let fixture: ComponentFixture<ShowThesisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowThesisDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowThesisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
