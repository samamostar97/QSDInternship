import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView, DateFormatterParams } from 'angular-calendar';
import { concat, Observable } from 'rxjs';
import { SharedService } from '../shared.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  constructor(private service:SharedService, private http:HttpClient) { }
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  li:any;
  
  @Input() event:any;
  
  Name="";
  Venue=0;
  VenueName="";
  Timing:any;
  Price=0;
  NumberOfTickets=0;
  Date="";
  DateEvent="";
  Counter=0;
  
  changed:boolean=false;
  @Input() venue:any;

  

  
  
  ngOnInit(): void {
   /*this.Name=this.event.Name;
    this.Venue=this.event.Venue;
    this.Price=this.event.Price;
    this.NumberOfTickets=this.event.NumberOfTickets;
    this.Timing=this.event.Timing;
    this.CalendarView;
    this.view;
    this.viewDate;*/
    this.http.get('http://localhost:4200/api/Venue').subscribe(Response=>{
      console.log(Response);

      this.li=Response;
      });

    
  }
 
  AddEvent(){
    //if(this.Name || this.Venue || this.Price || this.NumberOfTickets === undefined) {return}
    this.li.forEach((venueNew: { name: string; venueID: number; }) => {
      if(venueNew.name==this.VenueName)
      {
        this.Venue=venueNew.venueID;
        console.log(this.Venue);
    
        this.changed=true;
        
      }   
      this.Counter=venueNew.venueID; 
    });
    if(this.changed==false)
    {
      this.venue={




        "id": 0,
        
        "name": this.VenueName,
        
      };
      this.service.addVenue(this.venue).subscribe(res=>{
        
        alert(res.toString());
        
        
        console.log(this.Venue);
        
      })
      this.Venue=this.Counter+1;
      
    }
    
   

    this.event={
      "name":this.Name,
      "venueID": this.Venue,
      "timing": this.DateEvent,
      "price": this.Price,
      "numberOfTickets": this.NumberOfTickets     
    };
    this.service.addEvent(this.event).subscribe(res=>{
      alert(res.toString());
    })
   
  }
 
    eventClicked({ event }: { event: CalendarEvent }): void {
    console.log( event);
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log("dayClicked", date, events );
    var datum;
    console.log(date.getFullYear());
    datum=date.toJSON();
    console.log(datum);
    this.DateEvent=datum;
    this.Date=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
    
}


  
}
