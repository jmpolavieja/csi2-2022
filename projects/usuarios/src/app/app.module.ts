import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaUsuariosComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
