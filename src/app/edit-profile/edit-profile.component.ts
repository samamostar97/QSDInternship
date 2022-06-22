import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private http:HttpClient) { }
  li:any;
  lis=[];
  name:string="";
  address:string="";
  phone:string="";
  ngOnInit(): void {

    this.http.get('http://localhost:4200/api/User').subscribe(Response=>{
      console.log(Response);

      this.li=Response;
      this.lis=this.li.list;
      });
  }
}
