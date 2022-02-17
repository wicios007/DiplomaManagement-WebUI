import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UserDetailsComponent } from 'src/app/shared/user-details/user-details.component';
import { AddProposedThesisComponent } from './proposed-thesis/add-proposed-thesis/add-proposed-thesis.component';
import { DetailsProposedThesisComponent } from './proposed-thesis/details-proposed-thesis/details-proposed-thesis.component';
import { ProposedThesisComponent } from './proposed-thesis/proposed-thesis.component';
import { ShowProposedThesisByPromotersComponent } from './proposed-thesis/show-proposed-thesis-by-promoters/show-proposed-thesis-by-promoters.component';
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
                component: StudentComponent,
                children:
                [
                    {
                        path: 'thesis',
                        component: ThesisComponent
                    },
                    {
                        path: 'proposed-thesis',
                    component: ProposedThesisComponent,
                    children: 
                    [
                        {
                            path: 'show',
                            component: ShowProposedThesisComponent,
                        },
                        {
                            path: 'show-from-promoters',
                            component: ShowProposedThesisByPromotersComponent
                        },
                        {
                            path: 'show-from-promoters/:id',
                            component: DetailsProposedThesisComponent
                        },
                        {
                            path: 'show/:id',
                            component: DetailsProposedThesisComponent
                        },
                        {
                            path: 'add',
                            component: AddProposedThesisComponent
                        }
                    ]
                    },
                    {
                        path: 'send-email',
                        component: SendEmailComponent
                    },
                    {
                        path: 'show-promoters',
                        component: ShowPromotersComponent
                    },
                    {
                        path: 'user-details/:id',
                        component: UserDetailsComponent
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
export class StudentRoutingModule { }
