import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-details-screen',
  templateUrl: './event-details-screen.component.html',
  styleUrls: ['./event-details-screen.component.css']
})
export class EventDetailsScreenComponent implements OnInit {

  li:any;
  lis=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4200/api/Event').subscribe(Response=>{
      console.log(Response);

      this.li=Response;
      this.lis=this.li.list;
      console.log(this.li);

      });
  }

}
