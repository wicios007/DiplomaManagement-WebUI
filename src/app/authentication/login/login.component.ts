import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup
  errorString : string = ""

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService, private toast : ToastService) {
    this.form = fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value)
    this.auth.login(this.form.value)
      .subscribe(res => {
        console.log(res);
        if (res.access_token) {
          sessionStorage.setItem('token', res.access_token);
          sessionStorage.setItem('role', res.user_role),
          sessionStorage.setItem('valid_to', res.expires_in)
          localStorage.setItem('token', res.access_token)
          localStorage.setItem('role', res.user_role),
          localStorage.setItem('valid_to', res.expires_in)
          localStorage.setItem('userId', res.id)

        this.auth.getCurrentUserWithToken(res.access_token).subscribe(data => {
          this.auth.currentUser = data
          localStorage.setItem('user', JSON.stringify(data))
        })

          switch (res.user_role) {
            case "Admin":
              this.router.navigate(['dashboards/admin'])
              break
            case "Promoter":
              this.router.navigate(['dashboards/promoter'])
              break
            case "Student":
              this.router.navigate(['dashboards/student'])
              break
          }
        } else {
          console.error("user_role is undefined/null")
        }
      }, (err : any) => {
        console.log(err.error)
        this.toast.errorToast("B????d!", err.error.toString())
        // this.errorString = err.error.toString()
      }, () => {
        // this.auth.getCurrentUser().subscribe(data => {
        //   this.auth.currentUser = data
        // })
      })
      
  }
}
