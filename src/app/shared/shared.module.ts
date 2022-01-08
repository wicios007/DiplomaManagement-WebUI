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
import { DetailsProposedThesisComponent } from './details-proposed-thesis/details-proposed-thesis.component';
import { CommentsComponent } from './details-proposed-thesis/comments/comments.component';
import { CommentsAddComponent } from './details-proposed-thesis/comments-add/comments-add.component';



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
    CommentsComponent,
    CommentsAddComponent,

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
    UserDetailsComponent
  ]
})
export class SharedModule { }
