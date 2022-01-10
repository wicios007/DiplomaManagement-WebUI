import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICreateThesisDto } from '../interfaces/ICreateThesisDto';
import { IThesisDto } from '../interfaces/IThesisDto';
import { IUpdateThesisDto } from '../interfaces/IUpdateThesisDto';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ThesisService {

  private ApiURL : string = environment.ApiURL

  constructor(private http: HttpClient, private auth : AuthService, private token : TokenService) { }
  
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token.getToken()}`
    })
  }

  getById(departmentId : number, thesisId: number){
    return this.http.get<IThesisDto>(`${this.ApiURL}department/${departmentId}/thesis/${thesisId}`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  getAll(departmentId : number){
    return this.http.get<IThesisDto[]>(`${this.ApiURL}department/${departmentId}/thesis/`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  create(departmentId : number, createThesisDto : ICreateThesisDto){
    return this.http.post<ICreateThesisDto>(`${this.ApiURL}department/${departmentId}/thesis/`, createThesisDto, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  update(departmentId: number, propThesisId: number, thesisUpdateDto : IUpdateThesisDto){
    return this.http.post<IUpdateThesisDto>(`${this.ApiURL}department/${departmentId}/thesis/${propThesisId}`, thesisUpdateDto, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  delete(departmentId : number, thesisId : number){
    return this.http.delete(`${this.ApiURL}department/${departmentId}/thesis/${thesisId}`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  getByUserId(departmentId : number, studentId : number){
    return this.http.get<IThesisDto>(`${this.ApiURL}department/${departmentId}/thesis/student/${studentId}`,{ headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  getByPromoterId(departmentId : number, promoterId : number){
    return this.http.get<IThesisDto[]>(`${this.ApiURL}department/${departmentId}/thesis/promoter/${promoterId}`,{ headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
}
