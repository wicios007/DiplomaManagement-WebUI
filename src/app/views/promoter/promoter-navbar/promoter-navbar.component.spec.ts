import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterNavbarComponent } from './promoter-navbar.component';

describe('PromoterNavbarComponent', () => {
  let component: PromoterNavbarComponent;
  let fixture: ComponentFixture<PromoterNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoterNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
