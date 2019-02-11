import { Injectable } from '@angular/core';
import { throwError, of, Observable } from 'rxjs';
import{ map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email:string, password:string): Observable<string>{
    if(email==='a@a.com' && password==='aaa'){
     return of('asdasd3232asas3232').pipe(map(res=>{
       this.setToken(res);
       return res;
     }));
    }else{
     return throwError('user or password are not valid');
    }
  }

  setToken(t: string){
    window.localStorage.setItem(environment.tokenKey, t)
  }

  getToken(){
    return window.localStorage.getItem(environment.tokenKey)
  }

  isLogged(): boolean{
    return this.getToken()!=null;
  }
}
