import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-event-history',
  templateUrl: './event-history.component.html',
  styleUrls: ['./event-history.component.css']
})
export class EventHistoryComponent implements OnInit {

  searchValue:string="";
  li:any;
  lis=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4200/api/Event').subscribe(Response=>{
    console.log(Response);
    this.li=Response;
    this.lis=this.li.list;
    });
  }



}
