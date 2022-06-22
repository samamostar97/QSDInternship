import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersScreenComponent } from './view-orders-screen.component';

describe('ViewOrdersScreenComponent', () => {
  let component: ViewOrdersScreenComponent;
  let fixture: ComponentFixture<ViewOrdersScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
