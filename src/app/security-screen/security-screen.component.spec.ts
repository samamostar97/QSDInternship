import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityScreenComponent } from './security-screen.component';

describe('SecurityScreenComponent', () => {
  let component: SecurityScreenComponent;
  let fixture: ComponentFixture<SecurityScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
