import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPropThesisNavMenuComponent } from './student-prop-thesis-nav-menu.component';

describe('StudentPropThesisNavMenuComponent', () => {
  let component: StudentPropThesisNavMenuComponent;
  let fixture: ComponentFixture<StudentPropThesisNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPropThesisNavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPropThesisNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
