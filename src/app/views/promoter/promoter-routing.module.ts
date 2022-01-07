import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DetailsProposedThesisComponent } from 'src/app/shared/details-proposed-thesis/details-proposed-thesis.component';
import { UserDetailsComponent } from 'src/app/shared/user-details/user-details.component';
import { ShowThesisComponent } from '../student/thesis/show-thesis/show-thesis.component';
import { PromoterComponent } from './promoter.component';
import { ShowPromoterThesesComponent } from './show-promoter-theses/show-promoter-theses.component';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { ShowThesisDetailsComponent } from './show-thesis-details/show-thesis-details.component';

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
        component: PromoterComponent,
        children: 
        [
          {
            path: 'show-students',
            component: ShowStudentsComponent
          },
          {
            path: 'show-promoter-theses',
            component: ShowPromoterThesesComponent
          },
          {
            path: 'thesis/:id',
            component: ShowThesisDetailsComponent
          },
          {
            path: 'user-details/:id',
            component: UserDetailsComponent
          },
          {
            path: 'proposed-thesis/:id',
            component: DetailsProposedThesisComponent
          }
        ]
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
