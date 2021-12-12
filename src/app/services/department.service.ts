import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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

  constructor(private http: HttpClient, private token : TokenService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token.getToken()}`
    })
  }

  getAll(){
    return this.http.get<Department[]>(`${this.ApiURL}department`, this.httpOptions)
  }
  getById(id : number){
    return this.http.get<Department>(`${this.ApiURL}department/${id}`, this.httpOptions)
  }
  delete(id : number){
    return this.http.delete(`${this.ApiURL}department/${id}`, this.httpOptions)
  }
  create(dto : DepartmentDto){
    return this.http.post(`${this.ApiURL}department`, dto, this.httpOptions) 
  }
  update(id : number, departmentDto : DepartmentDto){
    return this.http.put((`${this.ApiURL}department/${id}`), departmentDto, this.httpOptions)
  }

}
