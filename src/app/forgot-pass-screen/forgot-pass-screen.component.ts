import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass-screen',
  templateUrl: './forgot-pass-screen.component.html',
  styleUrls: ['./forgot-pass-screen.component.css']
})
export class ForgotPassScreenComponent implements OnInit {

  constructor(private service:SharedService, private router:Router) { }

  @Input() user:any;
 
  Mail="";
 

  ngOnInit(): void {
    this.Mail=this.user.Mail;
  }

  sendNewPass(){
    this.user={
      
      
      
      
      "mail": this.Mail,
      
      
    };
    this.service.forgotPassword(this.user).subscribe(res=>{
      alert(res.toString());
      this.router.navigateByUrl('/login');
    })
   
  }
  

}
