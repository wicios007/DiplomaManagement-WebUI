import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICommentDto } from 'src/app/interfaces/ICommentDto';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ProposedThesisCommentsService } from 'src/app/services/proposed-thesis-comments.service';
import { ProposedThesisService } from 'src/app/services/proposed-thesis.service';

@Component({
  selector: 'app-details-comments-proposed-thesis',
  templateUrl: './details-comments-proposed-thesis.component.html',
  styleUrls: ['./details-comments-proposed-thesis.component.css']
})
export class DetailsCommentsProposedThesisComponent implements OnInit {

  comments : ICommentDto[] = [];
  user! : IUser
  users : IUser[] = []

  thesisId : number = 0


  constructor(private router : Router, private activatedRoute : ActivatedRoute, private propTheses : ProposedThesisService, private propThesesComm : ProposedThesisCommentsService, private auth : AuthService) {
    this.activatedRoute.params.subscribe(res => {
      this.thesisId = res.id
    })

    this.auth.getUsers().subscribe(data => {
      this.users = data
    }, (err) => console.error(err))

    this.auth.getCurrentUser().subscribe(data => {
      this.user = data;
    }, 
    err => console.error(err),
    () => {
      this.propThesesComm.getAll(this.user.departmentId, this.thesisId).subscribe(data => {
        this.comments = data;
        console.log(`depid: ${this.user.departmentId}`)
        console.log(`thesisId: ${this.thesisId}`)
        console.log(`userId: ${this.user.id}`)
        console.log(data)
        //console.log(this.comments)
      })
    }    
    )
  }


  ngOnInit(): void {

  }

  getUserName(id : number) : string{
    const firstName = this.users.find(c => c.id == id)?.firstName
    const lastName = this.users.find(c => c.id == id)?.lastName
      return `${firstName} ${lastName}`
  }
}
