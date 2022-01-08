import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisCardPdfComponent } from './thesis-card-pdf.component';

describe('ThesisCardPdfComponent', () => {
  let component: ThesisCardPdfComponent;
  let fixture: ComponentFixture<ThesisCardPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThesisCardPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisCardPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
