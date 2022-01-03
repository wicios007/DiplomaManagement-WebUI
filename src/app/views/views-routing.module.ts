import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { UserDetailsComponent } from '../shared/user-details/user-details.component';
import { AdminComponent } from './admin/admin.component';
import { PromoterComponent } from './promoter/promoter.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {roles: ['Admin']},
    loadChildren: () => import('./admin/admin.module').then(c => c.AdminModule)
  },
  {
    path: 'promoter',
    component: PromoterComponent,
    canActivate: [AuthGuard],
    data: {roles: ['Admin, Promoter']},
    loadChildren: () => import('./promoter/promoter.module').then(c => c.PromoterModule)
  },
  {
    path: 'student',
    component: StudentComponent,
    data: {roles: ['Admin, Student']},
    loadChildren: () => import('./student/student.module').then(c => c.StudentModule)
  },
  {
    canActivate: [AuthGuard],
    data: {roles: ['Admin', 'Promoter', 'Student']},
    path: 'user-details/:id',
    component: UserDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'authentication/404'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
