import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDepartmentDto } from '../interfaces/IDepartmentDto';
import { IDepartmentUpdate } from '../interfaces/IDepartmentUpdate';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

interface Department{
  id : number,
  name : string,
  initials : string,
}
interface DepartmentDto{

}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  ApiURL : string = environment.ApiURL

  constructor(private http: HttpClient, private token : TokenService, private auth : AuthService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token.getToken()}`
    })
  }

  getAll(){
    return this.http.get<IDepartmentDto[]>(`${this.ApiURL}department`, this.auth.httpOptions)
  }
  getById(id : number){
    return this.http.get<IDepartmentDto>(`${this.ApiURL}department/${id}`, this.auth.httpOptions)
  }
  delete(id : number){
    return this.http.delete(`${this.ApiURL}department/${id}`, this.auth.httpOptions)
  }
  create(dto : DepartmentDto){
    return this.http.post(`${this.ApiURL}department`, dto, this.auth.httpOptions) 
  }
  update(id : number, departmentDto : IDepartmentUpdate){
    return this.http.put(`${this.ApiURL}department/${id}`, departmentDto, this.auth.httpOptions)
  }

}
