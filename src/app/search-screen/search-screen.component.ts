import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css']
})
export class SearchScreenComponent implements OnInit {

  li:any;
  testLi:any;
  lis=[];
  filter!:string;
  subscription1!: Subscription;
  constructor(private http:HttpClient,private data: DataService) { }

  ngOnInit(): void {
    this.subscription1 = this.data.currentFilter.subscribe(message => this.filter = message)
    this.http.get('http://localhost:4200/api/Event').subscribe(Response=>{
      console.log(Response);
      
      this.li=Response;
      this.lis=this.li.list;
      console.log(this.li);
      this.testLi=(this.li.filter((e: { name: string  }) => e.name.includes(this.filter) || e.name.toLowerCase().includes(this.filter)));
      });
      
      
      
  }


}
