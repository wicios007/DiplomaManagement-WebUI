import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { AdminNavbarComponent } from "./admin-navbar/admin-navbar.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { RegisterComponent } from "./user/register/register.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentNavMenuComponent } from './department/department-nav-menu/department-nav-menu.component';
import { UserComponent } from './user/user.component';
import { UserNavMenuComponent } from './user/user-nav-menu/user-nav-menu.component';


@NgModule({
  declarations: [
    AdminComponent,
    RegisterComponent,
    AdminNavbarComponent,
    UserListComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentComponent,
    DepartmentNavMenuComponent,
    UserComponent,
    UserNavMenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
