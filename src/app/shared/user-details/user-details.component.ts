import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IDepartmentDto } from 'src/app/interfaces/IDepartmentDto';
import { IThesisDto } from 'src/app/interfaces/IThesisDto';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { DepartmentService } from 'src/app/services/department.service';
import { ThesisService } from 'src/app/services/thesis.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() userId: number
  user!: IUser
  showSendEmailComponent: boolean = false
  departmentDto!: IDepartmentDto
  role: string = ""
  haveAcceptedThesis : boolean
  thesis : IThesisDto


  constructor(private auth: AuthService, private activatedRoute: ActivatedRoute, private thesisService : ThesisService, private toast: ToastService, private department: DepartmentService) {
    this.haveAcceptedThesis = false
    this.userId = 0
    this.activatedRoute.params.subscribe(res => {
      console.log(res.id)
      this.userId = res.id
    })
  }

  ngOnInit(): void {
    this.auth.getUserById(this.userId).subscribe(data => {
      this.user = data
      console.log(this.user)
    }, err => {
      this.toast.errorToast("Błąd", "Błąd podczas pobierania użytkownika")
    }, () => {
      this.department.getById(this.user.departmentId).subscribe(data => {
        this.departmentDto = data
      })
      switch (this.user.roleName) {
        case 'Promoter': {
          this.user.roleName = "Promotor"
          break
        }
        case 'Admin': {
          this.user.roleName = "Admin"
          break
        }
        case 'Student': {
          this.user.roleName = "Student"
          this.thesisService.getByUserId(this.user.departmentId, this.user.id).subscribe(data => {
            this.thesis = data
            this.haveAcceptedThesis = true
            if(this.thesis == undefined || this.thesis == null){
              this.haveAcceptedThesis = false
            }            
          },
          err => {
            console.error(err)
            this.haveAcceptedThesis = false
          }, () => {
          })
          break
        }
      }

    }
    )
  }

  showSendEmail() {
    this.showSendEmailComponent = !this.showSendEmailComponent
  }

}
