import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: 'dashboards',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
  {
    path: 'authentication',
    component: BlankComponent,
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'authentication/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './authentication/login/login.component';
// import { BlankComponent } from './layouts/blank/blank.component';

// const routes: Routes = [
//   {
//     path: 'authentication',
//     loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
//   },
//   {
//     path: 'dashboards',
//     loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
//   },
//   {
//     path: '',
//     component: LoginComponent,
//     pathMatch: 'full'
//   },
//   {
//     path: '**',
//     redirectTo: 'authentication/404'
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

