import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AddProposedThesisComponent } from './proposed-thesis/add-proposed-thesis/add-proposed-thesis.component';
import { DetailsProposedThesisComponent } from './proposed-thesis/details-proposed-thesis/details-proposed-thesis.component';
import { ProposedThesisComponent } from './proposed-thesis/proposed-thesis.component';
import { ShowProposedThesisComponent } from './proposed-thesis/show-proposed-thesis/show-proposed-thesis.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { ShowPromotersComponent } from './show-promoters/show-promoters.component';
import { StudentComponent } from './student.component';
import { ThesisComponent } from './thesis/thesis.component';



const routes: Routes = [
    {
        path: '',
        children: [
            {
                canActivate: [AuthGuard],
                data: {
                    role: ['Admin', 'Student']
                },
                path: 'student',
                component: StudentComponent
            },
            {
                canActivate: [AuthGuard],
                data: {
                    role: ['Admin', 'Student']
                },
                path: 'student/thesis',
                component: ThesisComponent
            },
            {
                canActivate: [AuthGuard],
                data: {
                    role: ['Admin', 'Student']
                },
                path: 'student/proposed-thesis',
                component: ProposedThesisComponent
            },
            {
                canActivate: [AuthGuard],
                data: {
                    role: ['Admin', 'Student']
                },
                path: 'student/proposed-thesis/show',
                component: ShowProposedThesisComponent
            },
            {
                canActivate: [AuthGuard],
                data: {
                    role: ['Admin', 'Student']
                },
                path: 'student/proposed-thesis/show/:id',
                component: DetailsProposedThesisComponent
            },
            {
                canActivate: [AuthGuard],
                data: {
                    role: ['Admin', 'Student']
                },
                path: 'student/proposed-thesis/add',
                component: AddProposedThesisComponent
            },
            {
                canActivate: [AuthGuard],
                data: {
                    role: ['Admin', 'Student']
                },
                path: 'student/send-email',
                component: SendEmailComponent
            },
            {
                canActivate: [AuthGuard],
                data: {
                    role: ['Admin', 'Student']
                },
                path: 'student/show-promoters',
                component: ShowPromotersComponent
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
export class StudentRoutingModule { }
