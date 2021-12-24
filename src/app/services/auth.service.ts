import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
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

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ApiURL : string = environment.ApiURL

  isLogged : Boolean = false

  constructor(private http : HttpClient, private token : TokenService, private router : Router) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token.getToken()}`
    })
  }

  
  login(data: any){
    return this.http.post<any>(this.ApiURL + 'account/login', data)
    .pipe(
      tap(_ => {
        // sessionStorage.setItem('currentUser', data.email) //dlaczego przy próbie ustawienia session storage wartosc currentUser jest undefined, a przy localstorage juz nie?
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

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${this.token.getToken()}`
    //   })
    // }
    
    return this.http.post<any>(this.ApiURL + 'account/register', data, this.httpOptions)
    .pipe(
      catchError((err) => {
        console.log('err service')
        //console.error(err)
        return throwError(err)
      })
      //tap(),
      //catchError(this.handleError("register", []))
    )
  }

  getUsers(){
    return this.http.get<IUser[]>(this.ApiURL + "account/users")
    .pipe(
      tap(),
      catchError(this.handleError("getUsers", []))
    )
  }

  getUserById(id : number){
    return this.http.get<IUser>(`${this.ApiURL}account/users/${id}`)
    .pipe(
      tap(),
      catchError(this.handleError("getUserById", []))
    )
  }

  getCurrentUser(){
    return this.http.get<IUser>(`${this.ApiURL}account/users/current`, this.httpOptions)
  }

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
    localStorage.removeItem('currentUser')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('token')
    this.isLogged = false
    this.router.navigate([''])
  }

  getRole() : string | undefined{
    const role = sessionStorage.getItem('role')
    return role?.toString()
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
