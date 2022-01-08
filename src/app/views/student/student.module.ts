import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MaterialModule } from "src/app/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { AddProposedThesisComponent } from "./proposed-thesis/add-proposed-thesis/add-proposed-thesis.component";
import { DetailsCommentProposedThesisAddComponent } from "./proposed-thesis/details-comment-proposed-thesis-add/details-comment-proposed-thesis-add.component";
import { DetailsCommentsProposedThesisComponent } from "./proposed-thesis/details-comments-proposed-thesis/details-comments-proposed-thesis.component";
import { DetailsProposedThesisComponent } from "./proposed-thesis/details-proposed-thesis/details-proposed-thesis.component";
import { ProposedThesisComponent } from "./proposed-thesis/proposed-thesis.component";
import { ShowProposedThesisComponent } from "./proposed-thesis/show-proposed-thesis/show-proposed-thesis.component";
import { StudentPropThesisNavMenuComponent } from "./proposed-thesis/student-prop-thesis-nav-menu/student-prop-thesis-nav-menu.component";
import { SendEmailComponent } from "./send-email/send-email.component";
import { StudentNavbarComponent } from "./student-navbar/student-navbar.component";
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";
import { ShowThesisComponent } from "./thesis/show-thesis/show-thesis.component";
import { ThesisComponent } from "./thesis/thesis.component";
import { ShowPromotersComponent } from './show-promoters/show-promoters.component';
import { ThesisCardPdfComponent } from './thesis/thesis-card-pdf/thesis-card-pdf.component';



@NgModule({
    declarations: [
        StudentComponent,
        ProposedThesisComponent,
        SendEmailComponent,
        StudentNavbarComponent,
        AddProposedThesisComponent,
        ShowProposedThesisComponent,
        DetailsProposedThesisComponent,
        DetailsCommentProposedThesisAddComponent,
        DetailsCommentsProposedThesisComponent,
        StudentPropThesisNavMenuComponent,
        ThesisComponent,
        ShowThesisComponent,
        ShowPromotersComponent,
        ThesisCardPdfComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        StudentRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        DetailsCommentsProposedThesisComponent,
        ShowProposedThesisComponent,
    ]
})
export class StudentModule { }
