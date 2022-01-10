import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DepartmentDetailsComponent } from 'src/app/shared/department-details/department-details.component';
import { UserDetailsComponent } from 'src/app/shared/user-details/user-details.component';
import { AdminComponent } from './admin.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentComponent } from './department/department.component';
import { RegisterComponent } from './user/register/register.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
    // {
    //   path: 'admin',
    //   component : AdminComponent,
    //   loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
    // },
    {
        path: '',
        children: [
            {
                canActivate: [AuthGuard],
                data: {
                    role: 'Admin'
                },
                path: 'department',
                component: DepartmentComponent,
                children: 
                [
                    {
                        path: 'list',
                        component: DepartmentListComponent
                    },
                    {
                        path: 'add',
                        component: DepartmentAddComponent
                    },
                    {
                        path: 'details/:id',
                        component: DepartmentDetailsComponent
                    }
                ]
            },
            {
                canActivate: [AuthGuard],
                data: {
                    role: 'Admin'
                },
                path: 'user',
                component: UserComponent,
                children:
                    [
                        {
                            path: 'register',
                            component: RegisterComponent
                        },
                        {
                            path: 'user-list',
                            component: UserListComponent
                        },
                        {
                            path: ':id',
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
export class AdminRoutingModule { }
