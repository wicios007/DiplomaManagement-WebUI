import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-promoter',
  templateUrl: './promoter.component.html',
  styleUrls: ['./promoter.component.css']
})
export class PromoterComponent implements OnInit {

  constructor(private auth : AuthService) {
    //  this.auth.getCurrentUser().subscribe(data => {
    //   this.auth.currentUser = data
    // })
    this.auth.currentUser = JSON.parse(localStorage.getItem('currentUserJSON')!)
    console.log("currentUser is" + JSON.stringify(this.auth.currentUser))
   }

  ngOnInit(): void {
    // this.auth.getCurrentUser().subscribe(data => {
    //   this.auth.currentUser = data
    // })
    // console.log("currentUser is" + JSON.stringify(this.auth.currentUser))
  }

  ngOnDestroy(): void{
    console.log("promoter destroyed")
  }

}
