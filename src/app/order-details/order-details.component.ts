import {Component, Input, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
  TicketInfo : any;

  constructor(private route: ActivatedRoute, private httpClient : HttpClient, private router : Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.TicketInfo = {
        MovieTitle : params['MovieTitle'],
        Location : params['Location'],
        NumberOfTickets : params['NumberOfTickets'],
        TotalCost : params['TotalCost'],
        EventID : params['EventID'],
        UserID : params['UserID']
      }
    })
  }


  TicketId:string='331232';
  OrderDate: any = new Date();
  Location = "Mepas Mall";


  buyTicket() {
    var insert = {
      EventID : Number(this.TicketInfo.EventID),
      UserID : Number(this.TicketInfo.UserID),
      TotalCost : Number(this.TicketInfo.TotalCost),
    }
    this.httpClient.post('http://localhost:4200/api/UserEvent',insert).subscribe(result => {
      console.log(result.toString());
    });
    this.Route()
  }
   Route() {
    var routeInfo = {
      MovieTitle : this.TicketInfo.MovieTitle,
      OrderDate : this.OrderDate,
      Location : this.TicketInfo.Location,
      NumberOfTickets : this.TicketInfo.NumberOfTickets,
      TotalCost : this.TicketInfo.TotalCost
    }
    this.router.navigate(['eTicketBody', routeInfo]);
  }
}
