import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  registerUser(){
    console.log("aaa")
    this.router.navigate(["dashboards/admin/register"])
  }

  userList(){
    console.log("bbb")
    this.router.navigate(["dashboards/admin/userList"])
  }
}
