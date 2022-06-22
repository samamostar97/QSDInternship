import { AddEventsComponent } from './../add-events/add-events.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ChangeDetectionStrategy, Input} from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { DatePipe } from '@angular/common';


import { Subject } from 'rxjs';


@Component({
  selector: 'app-view-calendar-screen',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './view-calendar-screen.component.html',
  styleUrls: ['./view-calendar-screen.component.css']
})
export class ViewCalendarScreenComponent implements OnInit {

  
 
  constructor(private http:HttpClient,public datepipe: DatePipe) { }
  lis=[];
  viewDate: Date = new Date();
  @Input() event:any;
  li:any;
  testLi:any;
  testLi2:any;
 
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  

  ngOnInit(): void {
    this.http.get('http://localhost:4200/api/Event').subscribe(Response=>{
      
      this.testLi=Response;
      this.testLi.forEach(function (element: { start: any; timing: any; title:any; name:any }) {
        element.start = new Date(element.timing);
        element.title=element.name;
        
      })
      this.li=this.testLi;
      this.lis=this.li.list;
      console.log(this.li);

      });
     

  }
  refresh = new Subject<void>();
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log("dayClicked", date, events );
    
    this.testLi2=events;
    this.testLi2.forEach((event: { dateNew: string; start: { getDate: () => string; getMonth: () => number; getFullYear: () => string; }; }) => {
      event.dateNew=event.start.getDate()+"-"+(event.start.getMonth()+1)+"-"+event.start.getFullYear();
    });
    
}
  


}
