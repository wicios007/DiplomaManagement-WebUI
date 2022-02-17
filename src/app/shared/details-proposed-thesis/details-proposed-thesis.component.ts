import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProposedThesisDto } from 'src/app/interfaces/IProposedThesisDto';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ProposedThesisService } from 'src/app/services/proposed-thesis.service';
import { ThesisService } from 'src/app/services/thesis.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-details-proposed-thesis',
  templateUrl: './details-proposed-thesis.component.html',
  styleUrls: ['./details-proposed-thesis.component.css']
})
export class DetailsProposedThesisComponent implements OnInit {

  these : IProposedThesisDto = {id:0, studentId:0, createdById:0, name:"", nameEnglish:"", description:"default", isAccepted : false}
  user : IUser
  thesisId : number
  showComments : boolean
  showCommentsBtnText : string
   student! : IUser

  @Output()
  thesisIdEvent: EventEmitter<number> = new EventEmitter();

  constructor(private router : Router, private activatedRoute : ActivatedRoute, private toast : ToastService, private propTheses : ProposedThesisService, private auth : AuthService) {
    this.showComments = true
    this.showCommentsBtnText = "Pokaż komentarze"
    this.thesisId = 0
    this.auth.currentUser = JSON.parse(localStorage.getItem('user')!)
    this.user = this.auth.currentUser
    


  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      console.log(res.id)
      this.thesisId = res.id
    })

    this.propTheses.getById(this.user.departmentId, this.thesisId).subscribe((data: IProposedThesisDto) => {
      console.log(data)
      this.these = data;
    }, 
    err => console.error(err), 
    () => {
      if(this.these.studentId !== 0){
        this.auth.getUserById(this.these.studentId).subscribe(data => this.student = data)
      }
    })
  }

  toggleComments(){
    this.showComments = !this.showComments
    this.showComments ? this.showCommentsBtnText = "Ukryj komentarze" : this.showCommentsBtnText = "Pokaż komentarze"
    this.thesisIdEvent.emit(this.thesisId) 
    //console.log(this.thesisId)
    console.log(this.these.id)
  }

  emitId(id: number){
    this.thesisIdEvent.emit(id)
  }

  acceptThesis(){
    this.propTheses.accept(this.student.departmentId, this.these.id).subscribe(data => {
      this.toast.successToast("Sukces!", `Praca dyplomowa ${this.these.name} została zaakceptowana.`)
    }, 
    err => {
      console.error(err)
      this.toast.errorToast("Błąd!", `Praca dyplomowa ${this.these.name} nie została zaakceptowana. `)
    })
  }
}
