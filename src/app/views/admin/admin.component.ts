import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private auth : AuthService) {
    this.auth.getCurrentUser().subscribe(data => {
      this.auth.currentUser = data
    }, (err) => {
      console.error(err)
    }, () => {
      this.auth.currentUser = JSON.parse(localStorage.getItem("currentUserJSON")!)
    })
   }

  ngOnInit(): void {
  }

}
