import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISendEmail } from '../interfaces/ISendEmail';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  ApiURL : string = environment.ApiURL

  constructor(private http : HttpClient, private token : TokenService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token.getToken()}`
    })
  }

  sendEmail(dto : ISendEmail){
    return this.http.post<any>(`${this.ApiURL}account/send`, dto, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })});
  }

}
