import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ProposedThesisService } from 'src/app/services/proposed-thesis.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-proposed-thesis',
  templateUrl: './add-proposed-thesis.component.html',
  styleUrls: ['./add-proposed-thesis.component.css']
})
export class AddProposedThesisComponent implements OnInit {
  public form: FormGroup
  private user!: IUser;
  constructor(private fb : FormBuilder, private router : Router, private propThesisService : ProposedThesisService, private auth : AuthService, private toast : ToastService) { 
    this.form = this.fb.group({})
    this.auth.currentUser = JSON.parse(localStorage.getItem('user')!)
    this.user = this.auth.currentUser
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.form = this.fb.group({
      name : [null, Validators.compose([Validators.required])],
      nameEnglish : [null],
      description : [null]

    })
  }

  onSubmit(){
    console.log(this.user)
    //console.log(this.form.value)
    this.propThesisService.create(this.user.departmentId, this.form.value).subscribe(data => {
      this.form.reset()
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.setErrors(null)
      })
      this.toast.successToast("Sukces", "Temat został dodany");
      
    },
    err => {
      console.log(err)
      this.toast.errorToast("Błąd!", "Wystąpił błąd")
    })
  }

}
