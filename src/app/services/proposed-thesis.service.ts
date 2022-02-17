import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProposedThesisDto } from '../interfaces/IProposedThesisDto';
import { IProposedThesisUpdateDto } from '../interfaces/IProposedThesisUpdateDto';
import { IProposedThesisCreateDto } from '../interfaces/IProposedThesisCreateDto';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class ProposedThesisService {

  private ApiURL : string = environment.ApiURL

  constructor(private http: HttpClient, private auth : AuthService, private token : TokenService) { }

  // public httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${this.token.getToken()}`
  //   })
  // }

  getById(departmentId : number, propThesisId: number){
    return this.http.get<IProposedThesisDto>(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  getAll(departmentId : number){
    return this.http.get<IProposedThesisDto[]>(`${this.ApiURL}department/${departmentId}/proposedThesis/`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  getAllByStudent(departmentId : number, studentId : number){
    return this.http.get<IProposedThesisDto[]>(`${this.ApiURL}department/${departmentId}/proposedThesis/student/${studentId}`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  getAllByPromoter(departmentId : number, promoterId : number){
    return this.http.get<IProposedThesisDto[]>(`${this.ApiURL}department/${departmentId}/proposedThesis/promoter/${promoterId}`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  getAllByPromoters(departmentId: number){
    return this.http.get<IProposedThesisDto[]>(`${this.ApiURL}department/${departmentId}/proposedThesis/promoter`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  create(departmentId : number, createPropThesisDto : any){
    return this.http.post<IProposedThesisCreateDto>(`${this.ApiURL}department/${departmentId}/proposedThesis`, createPropThesisDto, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  update(departmentId: number, propThesisId: number, propThesisUpdateDto : IProposedThesisUpdateDto){
    return this.http.put<IProposedThesisCreateDto>(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}`, propThesisUpdateDto, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  delete(departmentId : number, propThesisId : number){
    return this.http.delete(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  accept(departmentId : number, propThesisId : number){
    return this.http.post(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}/accept`, null, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }

}
