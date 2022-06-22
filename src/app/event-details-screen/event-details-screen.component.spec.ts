import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsScreenComponent } from './event-details-screen.component';

describe('EventDetailsScreenComponent', () => {
  let component: EventDetailsScreenComponent;
  let fixture: ComponentFixture<EventDetailsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
