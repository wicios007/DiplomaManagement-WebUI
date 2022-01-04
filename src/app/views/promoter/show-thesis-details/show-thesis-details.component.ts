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
  public promoter : IUser
  public isThesisExist : boolean = false
  thesisId : number = 0

  constructor(private thesisService : ThesisService, private auth : AuthService, private activatedRoute : ActivatedRoute) {
    
    this.auth.currentUser = JSON.parse(localStorage.getItem('currentUserJSON')!)

    this.activatedRoute.params.subscribe(res => {
      console.log(res.id)
      this.thesisId = res.id
    }, err => console.error(err),
    () => {
      this.thesisService.getById(this.user.departmentId, this.thesisId).subscribe(data => {
        this.auth.getUserById(data.promoterId).subscribe(data => {
          this.promoter = data
        })
        this.isThesisExist = true
        this.thesis = data
      })
    })

    // this.auth.getCurrentUser().subscribe(data => {
    //   this.user = data
    // }, err => console.error(err),
    // () => {
    //   this.activatedRoute.params.subscribe(res => {
    //     console.log(res.id)
    //     this.thesisId = res.id
    //   }, (err => console.error(err)), 
    //   () => {
    //     this.thesisService.getById(this.user.departmentId, this.thesisId).subscribe(data => {
    //         this.auth.getUserById(data.promoterId).subscribe(data => {
    //           this.promoter = data
    //         })
    //         this.isThesisExist = true
    //         this.thesis = data
    //       })
    //   })
    // })
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
