import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-edit-customer-details-screen',
  templateUrl: './edit-customer-details-screen.component.html',
  styleUrls: ['./edit-customer-details-screen.component.css']
})
export class EditCustomerDetailsScreenComponent implements OnInit {

  public tabId:string="profile";
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(value:string)
  {
    this.tabId=value;
  }
}
