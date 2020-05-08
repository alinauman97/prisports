import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = 'http://localhost:3000';
  authenticationToken: string = null;

  constructor(private http: HttpClient) { }

  authenticate(emailAddress: string, password: string) {
    this.http.post(`${this.baseUrl}/accounts/login`, { emailAddress: emailAddress, password: password }, { responseType: 'json', observe: 'body' })
      .subscribe(res => {
        let response = Object(res);
        this.authenticationToken = response.success ? response.token : null;
      });
  }

  registerUser(firstName: string, lastName: string, emailAddress: string, phoneNumber: string, password: string, sport1: string, rank1: string ){
    this.http.post<any>(`${this.baseUrl}/accounts/register`, {
      firstName: firstName, lastName: lastName, emailAddress: emailAddress, phoneNumber: phoneNumber, password: password,
      sport1: sport1, rank1: rank1 }, { responseType: 'json', observe: 'body' })
      .subscribe(res => {});
  }
}
