import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {

  li:any;
  lis=[];
  constructor(private http:HttpClient, private data:DataService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4200/api/Event').subscribe(Response=>{
      console.log(Response);

      this.li=Response;
      this.lis=this.li.list;
      console.log(this.li);
      

      });

  }

  bookEvent(id:number){
    this.data.changeSelectedEvent(id.toString());
    console.log(id.toString());

  }

}
