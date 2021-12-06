import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './admin/register/register.component';
import { PromoterComponent } from './promoter/promoter.component';
import { StudentComponent } from './student/student.component';
import { ViewsRoutingModule } from './views-routing.module';
import { FullComponent } from '../layouts/full/full.component';
import { AppModule } from '../app.module';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AdminComponent,
    RegisterComponent,
    PromoterComponent,
    StudentComponent,
    AdminNavbarComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ViewsModule { }
