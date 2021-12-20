import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICommentDto } from '../interfaces/ICommentDto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProposedThesisCommentsService {

  private ApiURL : string = environment.ApiURL

  constructor(private http: HttpClient, private auth : AuthService) { }

  getById(departmentId : number, propThesisId: number, commentId : number){
    return this.http.get<ICommentDto>(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}/comment/${commentId}`, this.auth.httpOptions)
  }
  getAll(departmentId : number, propThesisId : number){
    return this.http.get<ICommentDto[]>(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}/comment/`, this.auth.httpOptions)
  }
  create(departmentId : number, propThesisId : number, commentDto : ICommentDto){
    return this.http.post<ICommentDto>(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}/comment`, commentDto, this.auth.httpOptions)
  }
  update(departmentId: number, propThesisId: number, commentId : number, commentDto : ICommentDto){
    return this.http.put<ICommentDto>(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}/comment/${commentId}`, commentDto, this.auth.httpOptions)
  }
  delete(departmentId : number, propThesisId : number, commentId : number){
    return this.http.delete(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}/comment/${commentId}`, this.auth.httpOptions)
  }
}
