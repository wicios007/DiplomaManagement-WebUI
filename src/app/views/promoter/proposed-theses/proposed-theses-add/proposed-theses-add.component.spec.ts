import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedThesesAddComponent } from './proposed-theses-add.component';

describe('ProposedThesesAddComponent', () => {
  let component: ProposedThesesAddComponent;
  let fixture: ComponentFixture<ProposedThesesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposedThesesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedThesesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
