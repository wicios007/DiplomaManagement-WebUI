import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { AdminNavbarComponent } from "./admin-navbar/admin-navbar.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { RegisterComponent } from "./register/register.component";
import { UserListComponent } from "./user-list/user-list.component";


@NgModule({
  declarations: [
    AdminComponent,
    RegisterComponent,
    AdminNavbarComponent,
    UserListComponent,
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
