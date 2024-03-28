import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = "http://localhost:8282/login";

  constructor(private http: HttpClient) {}

  signIn(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + "/signIn", user);
  }

  signUp(user: User): Observable<string>  {
    return this.http.post(this.baseUrl + "/signUp", user, {responseType: 'text'});
  }
}
