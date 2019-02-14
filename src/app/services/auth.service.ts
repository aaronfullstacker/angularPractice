import { Injectable } from '@angular/core';
import { throwError, of, Observable, BehaviorSubject } from 'rxjs';
import{ map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private _isLogged: BehaviorSubject<boolean>;

  constructor() { 
    this._isLogged = new BehaviorSubject<boolean>(false);
  }

  login(email:string, password:string): Observable<string>{
    if(email==='a@a.com' && password==='aaa'){
     return of('asdasd3232asas3232').pipe(map(res=>{
       this.setToken(res);
       this._isLogged.next(true);
       return res;
     }));
    }else{
     return throwError('user or password are not valid');
    }
  }

  private setToken(t: string){
    window.localStorage.setItem(environment.tokenKey, t)
  }

  private deleteToken(){
    window.localStorage.removeItem(environment.tokenKey)
  }

  private getToken(){
    return window.localStorage.getItem(environment.tokenKey)
  }

  isLogged(): Observable  <boolean>{
    return this._isLogged;
  }

  logOut(){
    this._isLogged.next(false);
    this.deleteToken();
  }
}
