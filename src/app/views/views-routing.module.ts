import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './admin/register/register.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { PromoterComponent } from './promoter/promoter.component';
import { AddProposedThesisComponent } from './student/proposed-thesis/add-proposed-thesis/add-proposed-thesis.component';
import { DetailsProposedThesisComponent } from './student/proposed-thesis/details-proposed-thesis/details-proposed-thesis.component';
import { ProposedThesisComponent } from './student/proposed-thesis/proposed-thesis.component';
import { ShowProposedThesisComponent } from './student/proposed-thesis/show-proposed-thesis/show-proposed-thesis.component';
import { StudentComponent } from './student/student.component';
import { ThesisComponent } from './student/thesis/thesis.component';


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
        path: 'student/thesis',
        component: ThesisComponent
      },
      {
        canActivate: [AuthGuard],
        data : {
          role: ['Admin', 'Student']
        },
        path: 'student/proposed-thesis',
        component: ProposedThesisComponent
      },
      {
        canActivate: [AuthGuard],
        data : {
          role: ['Admin', 'Student']
        },
        path: 'student/proposed-thesis/show',
        component: ShowProposedThesisComponent
      },
      {
        canActivate: [AuthGuard],
        data : {
          role: ['Admin', 'Student']
        },
        path: 'student/proposed-thesis/show/:id',
        component: DetailsProposedThesisComponent
      },
      {
        canActivate: [AuthGuard],
        data : {
          role: ['Admin', 'Student']
        },
        path: 'student/proposed-thesis/add',
        component: AddProposedThesisComponent
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
