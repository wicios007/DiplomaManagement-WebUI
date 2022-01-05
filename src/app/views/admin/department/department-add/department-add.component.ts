import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDepartmentDto } from 'src/app/interfaces/IDepartmentDto';
import { AuthService } from 'src/app/services/auth.service';
import { DepartmentService } from 'src/app/services/department.service';
import { ToastService } from 'src/app/services/toast.service';
import { FormStatus } from 'src/app/shared/form-status';
import { matchValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  public form: FormGroup
  public formStatus = new FormStatus()
  public errorMessage: String = ""
  public isFetched: boolean = false

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService, private departmentService: DepartmentService, private toast: ToastService) {
    this.form = this.fb.group({})
  }

  createForm() {
    this.form = this.fb.group({
      name : [null, Validators.compose([Validators.required])]
    })
  }

  ngOnInit(): void {
    this.createForm()

  }

  onSubmit() {

    this.departmentService.create(this.form.value).subscribe(data => {
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.setErrors(null)
      })
      this.toast.successToast("Sukces!", `${this.form.value.name} został pomyślnie dodany`)
    }, err => {
      this.toast.errorToast("Błąd", "Błąd podczas tworzenia nowego departamentu")
    }, () => {

      this.form.reset()
    })



  }

}
