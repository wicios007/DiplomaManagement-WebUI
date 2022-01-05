import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  constructor(private auth : AuthService) {
    this.auth.currentUser = JSON.parse(localStorage.getItem('user')!)
   }

  ngOnInit(): void {
  }

}
