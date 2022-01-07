import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MaterialModule } from '../material.module';
import { SendEmailComponent } from './send-email/send-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ShowProposedThesisComponent } from './show-proposed-thesis/show-proposed-thesis.component';
import { DetailsCommentProposedThesisAddComponent } from './details-proposed-thesis/details-comment-proposed-thesis-add/details-comment-proposed-thesis-add.component';
import { DetailsCommentsProposedThesisComponent } from './details-proposed-thesis/details-comments-proposed-thesis/details-comments-proposed-thesis.component';
import { DetailsProposedThesisComponent } from './details-proposed-thesis/details-proposed-thesis.component';



@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent,
    SpinnerComponent,
    UserDetailsComponent,
    SendEmailComponent,
    DepartmentDetailsComponent,
    ShowProposedThesisComponent,
    DetailsProposedThesisComponent,
    DetailsCommentsProposedThesisComponent,
    DetailsCommentProposedThesisAddComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SpinnerComponent,
    UserDetailsComponent,
    DetailsProposedThesisComponent,
    DetailsCommentsProposedThesisComponent,
    DetailsCommentProposedThesisAddComponent
  ]
})
export class SharedModule { }
