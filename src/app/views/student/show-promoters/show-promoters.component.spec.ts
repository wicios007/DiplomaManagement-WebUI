import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPromotersComponent } from './show-promoters.component';

describe('ShowPromotersComponent', () => {
  let component: ShowPromotersComponent;
  let fixture: ComponentFixture<ShowPromotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPromotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPromotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
