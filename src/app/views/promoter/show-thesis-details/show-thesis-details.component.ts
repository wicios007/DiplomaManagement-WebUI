import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IThesisDto } from 'src/app/interfaces/IThesisDto';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ThesisService } from 'src/app/services/thesis.service';

@Component({
  selector: 'app-show-thesis-details',
  templateUrl: './show-thesis-details.component.html',
  styleUrls: ['./show-thesis-details.component.css']
})
export class ShowThesisDetailsComponent implements OnInit {

  user : IUser
  thesis : IThesisDto
  public student! : IUser
  public promoter! : IUser
  public isThesisExist : boolean = false
  thesisId : number = 0

  constructor(private thesisService : ThesisService, private auth : AuthService, private activatedRoute : ActivatedRoute) {
    
    // this.auth.currentUser = JSON.parse(localStorage.getItem('user')!)
    this.user = JSON.parse(localStorage.getItem('user')!)

    this.activatedRoute.params.subscribe(res => {
      console.log(res.id)
      this.thesisId = res.id
    })

    this.thesisService.getById(this.user.departmentId, this.thesisId).subscribe(data => {
      console.log(data),
      this.thesis = data
      this.isThesisExist = true
    }, 
    err => console.error(err), 
    () => {
      this.auth.getUserById(this.thesis.studentId).subscribe(data => {
        this.student = data
      }, err => console.error(err),
      () => {
        this.auth.getUserById(this.thesis.promoterId).subscribe(data => {
          this.promoter = data
        })
      })
    })
   }

  ngOnInit(): void {
    //  this.auth.getUserById(this.thesis.studentId).subscribe(data => {
    //    this.student = data
    //  })
    //  this.auth.getUserById(this.thesis.promoterId).subscribe(data => {
    //    this.promoter = data
    //  })
  }
  ngOnDestroy(){
    console.log("component destroyed")
  }

}
