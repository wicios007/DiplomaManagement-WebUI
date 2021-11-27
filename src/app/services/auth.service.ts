import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ApiURL : string = environment.ApiURL

  constructor(private http : HttpClient) { }


  
  login(data: any){
    return this.http.post<any>(this.ApiURL + 'account/login', data)
    .pipe(
      tap(_ => {
        // sessionStorage.setItem('currentUser', data.email) //dlaczego przy próbie ustawienia session storage wartosc currentUser jest undefined, a przy localstorage juz nie?
        localStorage.setItem('currentUser', data.email)
      }),
      catchError(this.handleError('login', []))
    )
  }

  register(data : any){
    return this.http.post<any>(this.ApiURL + 'account/register', data)
    .pipe(
      tap(),
      catchError(this.handleError("register", []))
    )
  }

  isLoggedIn() : Boolean{
    let user = localStorage.getItem('currentUser')
    if(user === null)
      return false
    return true
    
  }

  logOut(){
    localStorage.removeItem('currentUser')
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
