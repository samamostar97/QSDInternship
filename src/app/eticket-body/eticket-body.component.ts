import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-eticket-body',
  templateUrl: './eticket-body.component.html',
  styleUrls: ['./eticket-body.component.css']
})
export class EticketBodyComponent implements OnInit {

  Title='Ticket Information:'
  ImageSrc='./assets/qrcode.png';
  TicketInfo !: any;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.TicketInfo = {
        MovieTitle : params['MovieTitle'],
        Location : params['Location'],
        NumberOfTickets : params['NumberOfTickets'],
        TotalCost : params['TotalCost'],
        OrderDate : params['OrderDate']
      };
    })
  }
}
