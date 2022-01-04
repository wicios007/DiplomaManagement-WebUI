import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ShowThesisComponent } from '../student/thesis/show-thesis/show-thesis.component';
import { PromoterComponent } from './promoter.component';
import { ShowPromoterThesesComponent } from './show-promoter-theses/show-promoter-theses.component';
import { ShowStudentsComponent } from './show-students/show-students.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        canActivate: [AuthGuard],
        data: {
          role: ['Admin', 'Promoter']
        },
        path: 'promoter',
        component: PromoterComponent
      },
      {
        canActivate: [AuthGuard],
        data: {
          role: ['Admin', 'Promoter']
        },
        path: 'promoter/show-students',
        component: ShowStudentsComponent
      },
      {
        canActivate: [AuthGuard],
        data: {
          role: ['Admin', 'Promoter']
        },
        path: 'promoter/show-promoter-theses',
        component: ShowPromoterThesesComponent
      },
      {
        canActivate: [AuthGuard],
        data: {
          role: ['Admin', 'Promoter']
        },
        path: 'promoter/thesis/:id',
        component: ShowThesisComponent
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
export class PromoterRoutingModule { }
