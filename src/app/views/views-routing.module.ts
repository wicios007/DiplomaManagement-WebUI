import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { PromoterComponent } from './promoter/promoter.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {
    path: '',
    canActivate : [AuthGuard],
    children: [
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'promoter',
        component: PromoterComponent
      },
      {
        path: 'student',
        component: StudentComponent
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
