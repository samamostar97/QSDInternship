import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EticketBodyComponent } from './eticket-body.component';

describe('EticketBodyComponent', () => {
  let component: EticketBodyComponent;
  let fixture: ComponentFixture<EticketBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EticketBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EticketBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
