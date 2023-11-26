import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayCheckerComponent } from './holiday-checker.component';

describe('HolidayCheckerComponent', () => {
  let component: HolidayCheckerComponent;
  let fixture: ComponentFixture<HolidayCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayCheckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
