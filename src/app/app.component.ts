 import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularPractice';
  isLogged: boolean;
  constructor(private authService: AuthService){
    
  }
    ngOnInit():void{
      this.authService.isLogged().subscribe(res=>{
        this.isLogged = res;
      })

  }

  logOut(){
    this.authService.logOut();
  }
}
