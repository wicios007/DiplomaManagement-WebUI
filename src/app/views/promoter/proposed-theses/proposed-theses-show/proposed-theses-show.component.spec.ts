import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedThesesShowComponent } from './proposed-theses-show.component';

describe('ProposedThesesShowComponent', () => {
  let component: ProposedThesesShowComponent;
  let fixture: ComponentFixture<ProposedThesesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposedThesesShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedThesesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
