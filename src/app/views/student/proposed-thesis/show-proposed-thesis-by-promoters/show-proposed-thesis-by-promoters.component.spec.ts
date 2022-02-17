import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProposedThesisByPromotersComponent } from './show-proposed-thesis-by-promoters.component';

describe('ShowProposedThesisByPromotersComponent', () => {
  let component: ShowProposedThesisByPromotersComponent;
  let fixture: ComponentFixture<ShowProposedThesisByPromotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProposedThesisByPromotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProposedThesisByPromotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
