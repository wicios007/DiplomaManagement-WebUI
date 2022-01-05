import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private auth : AuthService) {
    this.auth.currentUser = JSON.parse(localStorage.getItem('user')!)
   }

  ngOnInit(): void {
  }

}
