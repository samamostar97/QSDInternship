import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  li:any;
  lis=[];
  currentEvent:any='';
  isLogged:boolean=false;
  filter!:string;
  subscription1!: Subscription;
  isAdmin:boolean=false;
  filter2!:string;
  subscription2!: Subscription;
  constructor(private http:HttpClient,private data: DataService,private router: Router) { }

  bindedTwoWays = '';
  ngOnInit(): void {
    this.subscription1 = this.data.currentIsLogged.subscribe(message => this.filter = message)
    this.subscription2 = this.data.currentIsAdmin.subscribe(message => this.filter2 = message)
    if(this.filter=='true')
      this.isLogged=true;
      if(this.filter2=='true')
      this.isAdmin=true;
    this.http.get('http://localhost:4200/api/Event').subscribe(Response=>{
    console.log(Response);
    this.li=Response;
    this.lis=this.li.list;
    console.log(this.li);
    this.currentEvent=this.li[0];
    });
  }
  

  sendit(inputValue: any) {
    console.log(inputValue);
    this.data.changeFilter(inputValue);
    this.bindedTwoWays=inputValue;
  
    this.router.navigateByUrl('/search');
    
    
  }
  logout(){
    this.isLogged=false;
    this.data.changeLogged('false');
    this.isAdmin=false;
    this.data.changeAdmin('false');
    this.data.changeLoggedUser('');
  }
  

}
