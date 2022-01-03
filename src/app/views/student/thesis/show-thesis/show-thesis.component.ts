import { Component, OnDestroy, OnInit } from '@angular/core';
import { IThesisDto } from 'src/app/interfaces/IThesisDto';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ThesisService } from 'src/app/services/thesis.service';

@Component({
  selector: 'app-show-thesis',
  templateUrl: './show-thesis.component.html',
  styleUrls: ['./show-thesis.component.css']
})
export class ShowThesisComponent implements OnInit, OnDestroy {

  user : IUser
  thesis : IThesisDto
  public promoter : IUser
  public isThesisExist : boolean = false

  constructor(private thesisService : ThesisService, private auth : AuthService) {
    this.auth.getCurrentUser().subscribe(data => {
      this.user = data
    }, err => console.error(err),
    () => {
      // this.thesisService.getByUserId(this.user.departmentId, this.user.id).subscribe(data => {
      this.thesisService.getByUserId(5,26).subscribe(data => {
        // if(data.id == null){
          // this.isThesisExist = false
        // }
        this.auth.getUserById(data.promoterId).subscribe(data => {
          this.promoter = data
        })
        this.isThesisExist = true
        this.thesis = data
      })
    })
   }

  ngOnInit(): void {
    this.auth.getUserById(this.thesis.promoterId).subscribe(data => {
      this.promoter = data
    })
  }
  ngOnDestroy(){
    console.log("component destroyed")
  }

}
