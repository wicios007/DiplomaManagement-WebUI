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



@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent,
    SpinnerComponent,
    UserDetailsComponent,
    SendEmailComponent
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
