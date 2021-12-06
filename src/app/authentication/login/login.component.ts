import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup
  errorString : string = ""

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.form = fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value)
    this.auth.login(this.form.value)
      .subscribe(res => {
        //console.log(res);
        if (res.access_token) {
          sessionStorage.setItem('token', res.access_token);
          sessionStorage.setItem('role', res.user_role)

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
          //console.error("ERROR")
        }
      }, (err : any) => {
        console.log(err.error)
        this.errorString = err.error
      })
      
  }
}
