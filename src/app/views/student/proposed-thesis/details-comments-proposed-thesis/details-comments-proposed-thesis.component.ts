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
  user : IUser
  users : IUser[] = []
  addCommentShow : boolean = false

  @Input() thesisIdEvent : number = 0
  @Input() showCommentsBtn : boolean = false


  constructor(private router : Router, private activatedRoute : ActivatedRoute, private propTheses : ProposedThesisService, private propThesesComm : ProposedThesisCommentsService, private auth : AuthService) {
    this.auth.currentUser = JSON.parse(localStorage.getItem('user')!)
    this.user = this.auth.currentUser
  }


  ngOnInit(): void {
    console.log(this.thesisIdEvent)
    this.propThesesComm.getAll(this.user.departmentId, this.thesisIdEvent).subscribe(data => {
      this.comments = data;
      console.log(data)
    }, err => console.error(err),
    () => {
      this.auth.getUsers().subscribe(data => {
        this.users = data
      }, (err) => console.error(err))
  
    })
  }

  getUserName(id : number) : string{
    const firstName = this.users.find(c => c.id == id)?.firstName
    const lastName = this.users.find(c => c.id == id)?.lastName
      return `${firstName} ${lastName}`
  }

  showAddCommentBtn(){
    this.addCommentShow = !this.addCommentShow

  }
}
