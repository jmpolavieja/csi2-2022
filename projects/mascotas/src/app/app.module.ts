import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.prod';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ListadoMascotasComponent } from './vistas/listado-mascotas/listado-mascotas.component';
import { DetalleMascotasComponent } from './vistas/detalle-mascotas/detalle-mascotas.component';
import { FormularioMascotasComponent } from './vistas/formulario-mascotas/formulario-mascotas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoMascotasComponent,
    DetalleMascotasComponent,
    FormularioMascotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
