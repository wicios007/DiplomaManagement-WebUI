import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-promoter',
  templateUrl: './promoter.component.html',
  styleUrls: ['./promoter.component.css']
})
export class PromoterComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    //console.log("currentUser is" + this.auth.currentUser)
  }

}
