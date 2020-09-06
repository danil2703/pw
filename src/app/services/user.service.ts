import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private BASE_URL = 'http://193.124.114.46:3001';

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  signUp(username: string, email: string, password: string): Observable<any> {
    console.log(username, 'test');
    const url = `${this.BASE_URL}/users`;
    return this.http.post<any>(url, {username, email, password});
  }

  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/sessions/create`;
    return this.http.post<any>(url, {email, password});
  }

}
