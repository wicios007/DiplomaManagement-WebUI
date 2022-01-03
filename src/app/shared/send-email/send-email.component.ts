import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { EmailSenderService } from 'src/app/services/email-sender.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  form : FormGroup
  user! : IUser
  public userIdProp : number = -1
  @Input() public destUser : IUser

  constructor(private fb : FormBuilder, public auth : AuthService, private email : EmailSenderService, private toast : ToastService) { 
    this.form = this.fb.group({})
   }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(data => {
      this.user = data
    }, (err) => {
      console.error(err)
    })
    this.createForm()
  }

  createForm(){
    this.form = this.fb.group({
      destId : [this.destUser.id],
      subject : [null, Validators.compose([Validators.required])],
      content : [null, Validators.compose([Validators.required])]
    })
  }

  onSubmit(){
    console.log(this.form.value)
    this.email.sendEmail(this.form.value).subscribe(data => {
      this.toast.successToast("Sukces!", "Email został wysłany");
      this.form.reset()
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.setErrors(null)
      })
    },
    err => {
      this.toast.errorToast("Błąd!", "Wystąpił problem z wysłaniem maila");
    })
  }



}
