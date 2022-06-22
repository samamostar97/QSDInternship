import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCalendarScreenComponent } from './view-calendar-screen.component';

describe('ViewCalendarScreenComponent', () => {
  let component: ViewCalendarScreenComponent;
  let fixture: ComponentFixture<ViewCalendarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCalendarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCalendarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
