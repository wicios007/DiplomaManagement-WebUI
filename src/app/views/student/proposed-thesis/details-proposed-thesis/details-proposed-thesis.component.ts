import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProposedThesisDto } from 'src/app/interfaces/IProposedThesisDto';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ProposedThesisService } from 'src/app/services/proposed-thesis.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-details-proposed-thesis',
  templateUrl: './details-proposed-thesis.component.html',
  styleUrls: ['./details-proposed-thesis.component.css']
})
export class DetailsProposedThesisComponent implements OnInit {

  these : IProposedThesisDto = {id:0, studentId:0, createdById:0, name:"", nameEnglish:"", description:"", isAccepted : false}
  user : IUser
  thesisId : number
  showComments : boolean
  showCommentsBtnText : string

  @Output()
  thesisIdEvent: EventEmitter<number> = new EventEmitter();

  constructor(private router : Router, private activatedRoute : ActivatedRoute, private propTheses : ProposedThesisService, private auth : AuthService, private toast : ToastService) {
    this.showComments = false
    this.showCommentsBtnText = "Pokaż komentarze"
    this.thesisId = 0
    this.auth.currentUser = JSON.parse(localStorage.getItem('user')!)
    this.user = this.auth.currentUser
    
    this.activatedRoute.params.subscribe(res => {
      console.log(res.id)
      this.thesisId = res.id
    })

    this.propTheses.getById(this.user.departmentId, this.thesisId).subscribe((data: IProposedThesisDto) => {
      console.log(data)
      this.these = data;
    })
  }

  ngOnInit(): void {
    // this.auth.getCurrentUser().subscribe(data => {
    //   this.user = data
    //   console.log(this.user)
    // },
    //   err => { console.error(err) },
    //   () => {
    //     this.propTheses.getById(this.user.departmentId, this.thesisId).subscribe((data: IProposedThesisDto) => {
    //       console.log(data)
    //       this.these = data;
    //     })
    //   }
    // )
  }

  acceptThesis() : void { 
    this.propTheses.accept(this.user.departmentId, this.thesisId).subscribe(data => {
      console.log(data)
      this.toast.successToast("Sukces!", "Temat pracy został zaakceptowany!")
    }, err => {
      console.error(err)
      this.toast.errorToast("Błąd!", "Temat pracy nie został zaakceptowany.")
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
}
