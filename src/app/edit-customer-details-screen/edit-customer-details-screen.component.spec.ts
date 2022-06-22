import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerDetailsScreenComponent } from './edit-customer-details-screen.component';

describe('EditCustomerDetailsScreenComponent', () => {
  let component: EditCustomerDetailsScreenComponent;
  let fixture: ComponentFixture<EditCustomerDetailsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomerDetailsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomerDetailsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
