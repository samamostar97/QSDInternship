import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "../data.service";
import { SharedService } from "../shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css']
})
export class BookTicketsComponent{

  constructor(private service:SharedService, private http:HttpClient, private data:DataService, private router : Router) { }
  li:any;
  li2:any;
  filter!:string;
  subscription1!: Subscription;
  realPrice:number=1;
  realNum:number=1;
  currentUserId !: string;
  ngOnInit(): void {
    this.subscription1 = this.data.currentSelectedEvent.subscribe(message => this.filter = message);
    this.data.currentLoggedUser.subscribe(message => this.currentUserId = message);
    console.log(this.filter);
    this.http.get('http://localhost:4200/api/Event/' + this.filter).subscribe(Response=>{
      console.log(Response);

      this.li=Response;
      console.log(this.li.price);
      this.TicketPrice= parseFloat(this.li.price);
      this.Total = this.NumberOfTickets* this.TicketPrice;
      this.realNum=this.li.venueID;
      this.http.get('http://localhost:4200/api/Venue/' + this.realNum).subscribe(Response=>{
      console.log(Response);
      this.li2=Response;
      this.Location=this.li2.name;
      this.MovieTitle = this.li.name
      });

      });




   }
  Title: string = 'Book Ticket';
  MovieTitle !: string;
  Location : string = "";
  Description: string = 'Maecenas sollicitudin, eros vitae bibendum vestibulum, arcu elit bibendum nulla, vitae eleifend orci diam sit amet quam. Ut vehicula neque est, non cursus purus bibendum sit amet. Morbi ac vehicula justo. Etiam vitae erat mollis velit elementum iaculis eu quis risus. Curabitur vel neque lectus. Donec mattis pharetra ligula, in cursus enim pulvinar vitae. Curabitur eget sagittis enim. Pellentesque auctor malesuada mauris sit amet cursus. Phasellus vel lacus venenatis, semper ipsum ut, lacinia nulla.';

  TicketPrice: number = 0;
  NumberOfTickets: number = 1;
  Total: number = 0;

  moreTickets():void {
    this.NumberOfTickets += 1;
    this.Total = this.NumberOfTickets* this.TicketPrice;
  }
  lessTickets():void {
    if(this.NumberOfTickets>1)
    this.NumberOfTickets -= 1;
    this.Total = this.NumberOfTickets* this.TicketPrice;
  }

  bookTicket() {
      var ticketInfo : any = {
        MovieTitle : this.MovieTitle,
        Location : this.Location,
        NumberOfTickets : this.NumberOfTickets,
        TotalCost : this.Total,
        EventID : this.filter,
        UserID : this.currentUserId
      };
      this.router.navigate(['viewOrderDetails',ticketInfo]);
  }
}
