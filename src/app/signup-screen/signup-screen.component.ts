import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { RtlScrollAxisType } from '@angular/cdk/platform';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent implements OnInit {

 
  constructor(private service : SharedService, private router:Router, private data:DataService) { }

  @Input() user:any;
  firstName="";
  lastName="";
  Username="";
  Email="";
  Address="";
  Phone="";
  Password="";
  confirmPassword="";
  
  

  ngOnInit(): void {
    this.firstName=this.user.firstName;
    this.lastName=this.user.lastName;
    this.Username=this.user.Username;
    this.Email=this.user.Email;
    this.Address=this.user.Address;
    this.Phone=this.user.Phone;
    this.Password=this.user.Password;
    this.confirmPassword=this.user.confirmPassword;

    
  }

  AddUser(){
    
    this.user={
      
      
      
      
      "firstName": this.firstName,
      "lastName": this.lastName,
      "username": this.Username,
      "mail": this.Email,
      "phone": this.Phone,
      "adress": this.Address,
      "password": this.Password,
      "confirmPassword": this.confirmPassword,
      "acceptTerms": true
      
      
      
      
      
    };
    this.service.addUser(this.user).subscribe(res=>{
      
      
      this.router.navigateByUrl('/login');
    })
   
  }

}
