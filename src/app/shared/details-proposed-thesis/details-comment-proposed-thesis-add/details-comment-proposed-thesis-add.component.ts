import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ProposedThesisCommentsService } from 'src/app/services/proposed-thesis-comments.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-details-comment-proposed-thesis-add',
  templateUrl: './details-comment-proposed-thesis-add.component.html',
  styleUrls: ['./details-comment-proposed-thesis-add.component.css']
})
export class DetailsCommentProposedThesisAddComponent implements OnInit {

  public form : FormGroup
  user : IUser
  thesisId : number = 0

  constructor(private fb : FormBuilder, private activatedRoute : ActivatedRoute, private propThesisCommentService : ProposedThesisCommentsService, private auth : AuthService, private toast : ToastService) { 
    this.form = this.fb.group({})
    // auth.getCurrentUser().subscribe(data => this.user = data, err => console.log(`--ERROR-- ${err}`)) 
    this.auth.currentUser = JSON.parse(localStorage.getItem('user')!)
    this.user = this.auth.currentUser
    this.activatedRoute.params.subscribe(res => {
      this.thesisId = res.id
    })
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.form = this.fb.group({
      comment : [null, Validators.compose([Validators.required])],
    })
  }

  onSubmit(){
    console.log(this.form.value)
    this.propThesisCommentService.create(this.user.departmentId, this.thesisId, this.form.value).subscribe(data => {
      this.form.reset()
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.setErrors(null)
      })
      this.toast.successToast("Sukces!", "Komentarz został dodany")

    }, err => {
      this.toast.errorToast("Error!", "Nie udało się dodać komentarza")
    })

  }

}
