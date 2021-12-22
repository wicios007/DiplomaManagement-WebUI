import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner.component';



@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
