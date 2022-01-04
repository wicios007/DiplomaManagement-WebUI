import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPromoterThesesComponent } from './show-promoter-theses.component';

describe('ShowPromoterThesesComponent', () => {
  let component: ShowPromoterThesesComponent;
  let fixture: ComponentFixture<ShowPromoterThesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPromoterThesesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPromoterThesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
