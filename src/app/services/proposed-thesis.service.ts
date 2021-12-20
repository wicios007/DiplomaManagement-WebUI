import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProposedThesisDto } from '../interfaces/IProposedThesisDto';
import { IProposedThesisUpdateDto } from '../interfaces/IProposedThesisUpdateDto';
import { IProposedThesisCreateDto } from '../interfaces/IProposedThesisCreateDto';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProposedThesisService {

  private ApiURL : string = environment.ApiURL

  constructor(private http: HttpClient, private auth : AuthService) { }

  getById(departmentId : number, propThesisId: number){
    return this.http.get<IProposedThesisDto>(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}`, this.auth.httpOptions)
  }
  getAll(departmentId : number){
    return this.http.get<IProposedThesisDto[]>(`${this.ApiURL}department/${departmentId}/proposedThesis/`, this.auth.httpOptions)
  }
  getAllByStudent(departmentId : number, studentId : number){
    return this.http.get<IProposedThesisDto[]>(`${this.ApiURL}department/${departmentId}/proposedThesis/student/${studentId}`, this.auth.httpOptions)
  }
  create(departmentId : number, createPropThesisDto : any){
    return this.http.post<IProposedThesisCreateDto>(`${this.ApiURL}department/${departmentId}/proposedThesis`, createPropThesisDto, this.auth.httpOptions)
  }
  update(departmentId: number, propThesisId: number, propThesisUpdateDto : IProposedThesisUpdateDto){
    return this.http.put<IProposedThesisCreateDto>(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}`, propThesisUpdateDto, this.auth.httpOptions)
  }
  delete(departmentId : number, propThesisId : number){
    return this.http.delete(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}`, this.auth.httpOptions)
  }
  accept(departmentId : number, propThesisId : number){
    return this.http.post(`${this.ApiURL}department/${departmentId}/proposedThesis/${propThesisId}`, this.auth.httpOptions)
  }

}
