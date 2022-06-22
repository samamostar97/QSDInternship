import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookTicketsComponent } from './book-tickets.component';


describe('AddEventsComponent', () => {
  let component: BookTicketsComponent;
  let fixture: ComponentFixture<BookTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
