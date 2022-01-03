import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() userId : number
  user! : IUser
  showSendEmailComponent : boolean = false

  
  constructor(private auth : AuthService, private activatedRoute : ActivatedRoute) { 
    this.userId = 0
    this.activatedRoute.params.subscribe(res => {
      console.log(res.id)
      this.userId = res.id
    })
  }
  
  ngOnInit(): void {
     this.auth.getUserById(this.userId).subscribe(data => {
       this.user = data
     })
  }

  showSendEmail(){
    this.showSendEmailComponent = !this.showSendEmailComponent
  }

}
