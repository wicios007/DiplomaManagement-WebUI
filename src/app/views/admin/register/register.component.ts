import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import {FormStatus} from 'src/app/shared/form-status'
import {matchValidator} from 'src/app/validators/password.validator'


interface Roles{
  value : number;
  viewValue : string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public formStatus = new FormStatus();
  public form: FormGroup
  public errorMessage : String = ""

  roles: Roles[] = [
    {value: 1, viewValue:"Promotor"},
    {value: 2, viewValue:"Student"},
    {value: 3, viewValue:"Admin"},
  ]

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.form = this.fb.group({})
  }

  createForm(){
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8), matchValidator('confirmPassword', true)])],
      confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(8), matchValidator('password')])],
      firstName : [null, Validators.compose([Validators.required])],
      lastName : [null, Validators.compose([Validators.required])],
      roleId : [1],
      promoterTitle : [null],
      studentIndexNumber : [null, Validators.compose([Validators.pattern("([0-9]+)")])]
    })
  }

  ngOnInit(): void {
    this.createForm()
  }


  onSubmit(){
    
    this.auth.register(this.form.value).subscribe(res => {
      console.log("new user created")
      window.alert("Nowy użytkownik został stworzony")
    this.form.reset()
    this.form.controls['roleId'].setValue(1)

    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key)?.setErrors(null)
    })
    }),
    (errorResponse : HttpErrorResponse) => {
      const messages = this.extractErrorMessagesFromErrorResponse(errorResponse)
      this.formStatus.onFormSubmitResponse({success: false, messages: messages})
    }
    
  }

  extractErrorMessagesFromErrorResponse  = (errorRes : HttpErrorResponse) => {
    // 1 - Create empty array to store errors
    const errors = [];
    
    // 2 - check if the error object is present in the response
    if (errorRes.error) {
    
      // 3 - Push the main error message to the array of errors
      errors.push(errorRes.error.message);
    
      // 4 - Check for Laravel form validation error messages object
      if (errorRes.error.errors) {
    
        // 5 - For each error property (which is a form field)
        for (const property in errorRes.error.errors) {
    
          if (errorRes.error.errors.hasOwnProperty(property)) {
    
            // 6 - Extract it's array of errors
            const propertyErrors: Array<string> = errorRes.error.errors[property];
    
            // 7 - Push all errors in the array to the errors array
            propertyErrors.forEach(error => errors.push(error));
          }
    
        }
    
      }
    
    }
    
    return errors;
    }

}
