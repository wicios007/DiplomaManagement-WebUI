import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedThesesComponent } from './proposed-theses.component';

describe('ProposedThesesComponent', () => {
  let component: ProposedThesesComponent;
  let fixture: ComponentFixture<ProposedThesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposedThesesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedThesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
