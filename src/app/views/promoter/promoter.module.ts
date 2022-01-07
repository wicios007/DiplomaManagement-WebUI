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

@NgModule({
  declarations: [
    PromoterComponent,
    PromoterNavbarComponent,
    ShowStudentsComponent,
    ShowPromoterThesesComponent,
    ShowThesisDetailsComponent,
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
