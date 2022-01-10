import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, first, last, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { TokenService } from './token.service';
import { IUser } from '../interfaces/IUser';



interface User{
  id : number;
  email : string;
  firstName : string;
  lastName : string;
}

class User{
  public Id : number
  public Email : string
  public FirstName : string
  public LastName : string
  constructor(id : number, email : string, firstName : string, lastName : string) {
    this.Id = id;
    this.Email = email
    this.FirstName = firstName
    this.LastName = lastName     
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ApiURL : string = environment.ApiURL

  isLogged : Boolean = false

  public currentUser : IUser

  constructor(private http : HttpClient, private token : TokenService, private router : Router) {
    // this.currentUser = {id: 0, departmentId: 0, firstName: "", lastName: "", email: ""}

    // this.getCurrentUser().subscribe(data => {
    //   this.currentUser = data
    // })
   }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })
  }

  
  login(data: any){
    return this.http.post<any>(this.ApiURL + 'account/login', data)
    .pipe(
      tap(_ => {
        localStorage.setItem('currentUser', data.email)
      }),
      catchError((err) => {
        console.log("err service")
        console.log(err)
        return throwError(err)
      })
      //catchError(this.handleError('login', []))
    )
  }


  register(data : any){
    
    return this.http.post<any>(this.ApiURL + 'account/register', data, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
    .pipe(
      catchError((err) => {
        console.log('err service')
        //console.error(err)
        return throwError(err)
      })
    )
  }

  getUsers(){
    return this.http.get<IUser[]>(this.ApiURL + "account/users")
    .pipe(
      tap(),
      catchError(this.handleError("getUsers", []))
    )
  }

  getUsersByRole(role : number) : Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this.ApiURL}account/usersByRole`,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')!}`
      }),
      params : new HttpParams({
        fromObject : {
          roleValue : role
        }
      })
    })
    .pipe(
      tap(),
      catchError(this.handleError("getUsersByRole", []))
    )
  }

  getUsersByRoleAndDepartment(departmentId : number, role : number){
    return this.http.get<IUser[]>(`${this.ApiURL}account/users/department/${departmentId}`,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')!}`
      }),
      params : new HttpParams({
        fromObject : {
          roleValue : role
        }
      })
    })
    .pipe(
      tap(),
      catchError(this.handleError("getUsersByRole", []))
    )
  }

  getUserById(id : number){
    return this.http.get<IUser>(`${this.ApiURL}account/users/${id}`)
  }

  getCurrentUser(){
    return this.http.get<IUser>(`${this.ApiURL}account/users/current`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    })})
  }

  getCurrentUserWithToken(token : string){
    return this.http.get<IUser>(`${this.ApiURL}account/users/current`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization : `Bearer ${token}`
      })
    })
  }
  // getCurrentUser(){
  //   console.log(this.currentUser)
  //   return this.currentUser ? of(this.currentUser) : this.http.get<IUser>(`${this.ApiURL}account/users/current`, this.httpOptions)
  // }

  isLoggedIn() : Boolean{
    let user = localStorage.getItem('currentUser')
    if(user === null){
      this.isLogged = false
      return false
    }
    this.isLogged = true
    return true
    
  }

  logOut(){
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('valid_to')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    localStorage.removeItem('role'),
    localStorage.removeItem('valid_to')
    localStorage.removeItem('userId')
    localStorage.removeItem('currentUserJSON')
    localStorage.removeItem('currentUserByToken')

    // this.currentUser = undefined

    this.isLogged = false
    this.router.navigate([''])
  }

  getRole() : string | undefined{
    const role = sessionStorage.getItem('role')
    return role?.toString()
  }

  // getFullName(id : number) : string{
  //   const userHttp = this.http.get<IUser>(`${this.ApiURL}account/users/${id}`, this.httpOptions)
  //   var user : IUser = {id: 0, firstName: "", lastName: "", departmentId: 0, email: ""}
  //   var firstName = ""
  //   var lastName = ""
  //   userHttp.subscribe(data => {
  //     user = data
  //     firstName = user.firstName
  //     lastName = user.lastName
  //     return `${firstName} ${lastName}`
  //   })
  //   return `${firstName} ${lastName}`
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  

}
