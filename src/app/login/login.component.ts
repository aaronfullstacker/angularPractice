import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServices:AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(emailHtmlElement,passwordHtmlElement){
    this.authServices
    .login(emailHtmlElement.value,passwordHtmlElement.value)
    .subscribe((successRes)=>{
      console.log(successRes);
      this.router.navigate(["member"])
    },(errorRes)=>{
     emailHtmlElement.value = passwordHtmlElement.value =''; 
      console.log(errorRes);
    })    
  }
}
