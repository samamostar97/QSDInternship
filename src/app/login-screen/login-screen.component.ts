import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private service:SharedService,private router: Router, private data:DataService, private http:HttpClient) { }

  @Input() user:any;

  Username="";

  Password="";
  li:any;
  filter!:string;
  subscription1!: Subscription;


  ngOnInit(): void {
    //this.Username=this.user.Username;
    //this.Password=this.user.Password;
    this.http.get('http://localhost:4200/api/User').subscribe(Response=>{
      console.log(Response);

      this.li=Response;

      console.log(this.li);


      });
  }

  LogIn(){

    this.user={
      "username": this.Username,

      "password": this.Password,

    };
    this.li.forEach((element: { username: string; userID: string; }) => {
      if(this.Username==element.username)
      {
        var id=element.userID.toString();
        this.data.changeLoggedUser(id);
        this.subscription1 = this.data.currentLoggedUser.subscribe(message => this.filter = message)
        console.log("sto uopste postojim");
        console.log(this.filter);

      }
            });
    this.service.authenticateUser(this.user).subscribe(res=>{
      //if(this.Username=="Admin")
      //this.data.changeAdmin('true');

      this.data.changeLogged('true');
      this.router.navigateByUrl('/viewEvents');
    })
  }
}
