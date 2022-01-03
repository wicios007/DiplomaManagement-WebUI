import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';



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
                path: 'register',
                component: RegisterComponent
            },
            {
                canActivate: [AuthGuard],
                data: {
                    role: 'Admin'
                },
                path: 'user-list',
                component: UserListComponent
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
