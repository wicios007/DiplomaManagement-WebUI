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
import { StudentNavbarComponent } from './student/student-navbar/student-navbar.component';
import { PromoterNavbarComponent } from './promoter/promoter-navbar/promoter-navbar.component';
import { ThesisComponent } from './student/thesis/thesis.component';
import { ProposedThesisComponent } from './student/proposed-thesis/proposed-thesis.component';
import { AddProposedThesisComponent } from './student/proposed-thesis/add-proposed-thesis/add-proposed-thesis.component';
import { ShowProposedThesisComponent } from './student/proposed-thesis/show-proposed-thesis/show-proposed-thesis.component';
import { ShowThesisComponent } from './student/thesis/show-thesis/show-thesis.component';
import { StudentPropThesisNavMenuComponent } from './student/proposed-thesis/student-prop-thesis-nav-menu/student-prop-thesis-nav-menu.component';
import { DetailsProposedThesisComponent } from './student/proposed-thesis/details-proposed-thesis/details-proposed-thesis.component';
import { DetailsCommentsProposedThesisComponent } from './student/proposed-thesis/details-comments-proposed-thesis/details-comments-proposed-thesis.component';




@NgModule({
  declarations: [
    AdminComponent,
    RegisterComponent,
    PromoterComponent,
    StudentComponent,
    AdminNavbarComponent,
    UserListComponent,
    StudentNavbarComponent,
    PromoterNavbarComponent,
    ThesisComponent,
    ProposedThesisComponent,
    AddProposedThesisComponent,
    ShowProposedThesisComponent,
    ShowThesisComponent,
    StudentPropThesisNavMenuComponent,
    DetailsProposedThesisComponent,
    DetailsCommentsProposedThesisComponent
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
