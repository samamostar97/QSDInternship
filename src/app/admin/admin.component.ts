import { SharedService } from './../shared.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  li:any;
  testLi:any;
  lis=[];
  
  constructor(private http:HttpClient,private data: DataService, private service:SharedService) { }

  ngOnInit(): void {
    
    this.http.get('http://localhost:4200/api/Event').subscribe(Response=>{
      console.log(Response);
      
      this.li=Response;
      this.lis=this.li.list;
      console.log(this.li);
      
      });
      
      
      
  }

  deleteEvent(id:number){
    console.log(id);
    this.service.deleteEvent(id).subscribe(res=>{
        
      alert(res.toString());
      
      
      
      
    })
  }


}
