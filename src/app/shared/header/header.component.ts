import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role : String | undefined = ""
  loggedUser : String | undefined = ""
  public userId : Number | undefined = 0

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role')?.toString()
    this.loggedUser = localStorage.getItem('currentUser')?.toString()
    const id = localStorage.getItem('userId')?.toString()
    this.userId = Number(id)
  }

  logout(){
    console.log(this.role)
    this.auth.logOut()
    this.router.navigate(['authentication/login'])
  }

}
