import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentNavMenuComponent } from './department-nav-menu.component';

describe('DepartmentNavMenuComponent', () => {
  let component: DepartmentNavMenuComponent;
  let fixture: ComponentFixture<DepartmentNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentNavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
