import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-view-orders-screen',
  templateUrl: './view-orders-screen.component.html',
  styleUrls: ['./view-orders-screen.component.css']
})
export class ViewOrdersScreenComponent implements OnInit {

  li:any;
  lis=[];
  currentEvent:any='';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4200/api/Event').subscribe(Response=>{
    console.log(Response);
    this.li=Response;
    this.lis=this.li.list;
    console.log(this.li);
    this.currentEvent=this.li[0];
    });
  }

}
