import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  role : String | undefined = ""
  loggedUser : String | undefined = ""
  user : IUser
  public userId : Number | undefined = 0

  constructor(private auth : AuthService, private router : Router) { 
    this.user = {id: 0, firstName: "", lastName: "", email: "", departmentId: 0, roleName: ""}
  }

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role')?.toString()
    this.loggedUser = localStorage.getItem('currentUser')?.toString()
    this.user = JSON.parse(localStorage.getItem('user')!)
    const id = localStorage.getItem('userId')?.toString()
    this.userId = Number(id)
  }

  redirectTo(): void {
    this.router.navigate([`/dashboards/${this.role?.toLowerCase()}/user-details/${this.userId}`])
  }

  logout(){
    console.log(this.role)
    this.auth.logOut()
    this.router.navigate(['authentication/login'])
  }

  ngOnDestroy(){
    console.log("header destroyed");
    this.user = {id: 0, firstName: "", lastName: "", email: "", departmentId: 0, roleName: ""}
  }

}
