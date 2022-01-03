import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { PromoterComponent } from './promoter.component';
import { ShowStudentsComponent } from './show-students/show-students.component';

const routes: Routes = [
    {
        path: '',
        children: [
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
                  role: ['Admin', 'Promoter']
                },
                path: 'promoter/show-students',
                component: ShowStudentsComponent
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
