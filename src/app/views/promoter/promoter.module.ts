import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PromoterNavbarComponent } from "./promoter-navbar/promoter-navbar.component";
import { PromoterRoutingModule } from "./promoter-routing.module";
import { PromoterComponent } from "./promoter.component";
import { ShowStudentsComponent } from "./show-students/show-students.component";
import { ShowPromoterThesesComponent } from './show-promoter-theses/show-promoter-theses.component';
import { ShowThesisDetailsComponent } from './show-thesis-details/show-thesis-details.component';
import { StudentModule } from "../student/student.module";
import { ProposedThesesComponent } from './proposed-theses/proposed-theses.component';
import { ProposedThesesShowComponent } from './proposed-theses/proposed-theses-show/proposed-theses-show.component';
import { ProposedThesesAddComponent } from './proposed-theses/proposed-theses-add/proposed-theses-add.component';
import { ProposedThesesSidebarComponent } from './proposed-theses/proposed-theses-sidebar/proposed-theses-sidebar.component';
import { DetailsProposedThesisComponent } from './proposed-theses/details-proposed-thesis/details-proposed-thesis.component';
import { DetailsCommentProposedThesisAddComponent } from './proposed-theses/details-comment-proposed-thesis-add/details-comment-proposed-thesis-add.component';
import { DetailsCommentsProposedThesisComponent } from './proposed-theses/details-comments-proposed-thesis/details-comments-proposed-thesis.component';

@NgModule({
  declarations: [
    PromoterComponent,
    PromoterNavbarComponent,
    ShowStudentsComponent,
    ShowPromoterThesesComponent,
    ShowThesisDetailsComponent,
    ProposedThesesComponent,
    ProposedThesesShowComponent,
    ProposedThesesAddComponent,
    ProposedThesesSidebarComponent,
    DetailsProposedThesisComponent,
    DetailsCommentProposedThesisAddComponent,
    DetailsCommentsProposedThesisComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    PromoterRoutingModule,
    ReactiveFormsModule,
    StudentModule
  ]
})
export class PromoterModule { }
