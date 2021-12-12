import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-thesis',
  templateUrl: './add-thesis.component.html',
  styleUrls: ['./add-thesis.component.css']
})
export class AddThesisComponent implements OnInit {
  public form: FormGroup
  constructor(private fb : FormBuilder, private router : Router) { this.form = this.fb.group({}) }

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

  }

}
