import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Data } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient:HttpClient) { }

  memberData(): Observable<any>{
    return this.httpClient.get(environment.serverUrl)
    };
  }


