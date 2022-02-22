import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICommentDto } from '../interfaces/ICommentDto';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ProposedThesisCommentsService {

  private ApiURL : string = environment.ApiURL

  comments : ICommentDto[] = []

  constructor(private http: HttpClient, private auth : AuthService, private token : TokenService) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token.getToken()}`
    })
  }

  getById(departmentId : number, propThesisId: number, commentId : number){
    return this.http.get<ICommentDto>(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}/comment/${commentId}`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  getAll(departmentId : number, propThesisId : number){
    return this.http.get<ICommentDto[]>(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}/comment/`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  create(departmentId : number, propThesisId : number, commentDto : ICommentDto){
    return this.http.post<ICommentDto>(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}/comment`, commentDto, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  update(departmentId: number, propThesisId: number, commentId : number, commentDto : ICommentDto){
    return this.http.put<ICommentDto>(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}/comment/${commentId}`, commentDto, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
  delete(departmentId : number, propThesisId : number, commentId : number){
    return this.http.delete(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}/comment/${commentId}`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }
}
