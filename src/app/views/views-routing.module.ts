import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './admin/register/register.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { PromoterComponent } from './promoter/promoter.component';
import { AddThesisComponent } from './student/add-thesis/add-thesis.component';
import { StudentComponent } from './student/student.component';
import { ThesisListComponent } from './student/thesis-list/thesis-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        canActivate : [AuthGuard],
        data : {
          role: 'Admin'
        },
        path: 'admin',
        component: AdminComponent
      },
      {
        canActivate : [AuthGuard],
        data : {
          role: 'Admin'
        },
        path: 'admin/register',
        component: RegisterComponent
      },
      {
        canActivate : [AuthGuard],
        data : {
          role: 'Admin'
        },
        path: 'admin/userList',
        component: UserListComponent
      },
      
      {
        canActivate : [AuthGuard],
        data : {
          role: ['Admin', 'Promoter']
        },
        path: 'promoter',
        component: PromoterComponent
      },
      {
        canActivate : [AuthGuard],
        data : {
          role: ['Admin', 'Student']
        },
        path: 'student',
        component: StudentComponent
      },
      {
        canActivate: [AuthGuard],
        data : {
          role: ['Admin', 'Student']
        },
        path: 'student/addThesis',
        component: AddThesisComponent
      },
      {
        canActivate: [AuthGuard],
        data : {
          role: ['Admin', 'Student']
        },
        path: 'student/thesisList',
        component: ThesisListComponent
      },
      {
        path: '**',
        redirectTo: 'authentication/404'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
