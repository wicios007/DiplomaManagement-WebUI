import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { PromoterModule } from './promoter/promoter.module';
import { StudentModule } from './student/student.module';
import { ShowProposedThesisComponent } from './student/proposed-thesis/show-proposed-thesis/show-proposed-thesis.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdminModule,
    PromoterModule,
    StudentModule,
    ViewsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:
  [
    ShowProposedThesisComponent
  ]
})
export class ViewsModule { }
