import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MiFormComponent } from './mi-form/mi-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPerfilComponent } from './form-perfil/form-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    MiFormComponent,
    FormPerfilComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
