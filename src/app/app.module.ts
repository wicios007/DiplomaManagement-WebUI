import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlankComponent } from './layouts/blank/blank.component';
import { MaterialModule } from './material.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FullComponent } from './layouts/full/full.component';
import { ViewsModule } from './views/views.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthenticationModule,
    ReactiveFormsModule,
    HttpClientModule,
    ViewsModule,
    SharedModule
  ],
  exports: [
    MaterialModule,
    SharedModule,
    BlankComponent,
    FullComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
