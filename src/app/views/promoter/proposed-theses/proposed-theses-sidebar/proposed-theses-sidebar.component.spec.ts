import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedThesesSidebarComponent } from './proposed-theses-sidebar.component';

describe('ProposedThesesSidebarComponent', () => {
  let component: ProposedThesesSidebarComponent;
  let fixture: ComponentFixture<ProposedThesesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposedThesesSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedThesesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
