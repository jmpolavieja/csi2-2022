import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { DetailComponent } from './detail/detail.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';

const routes: Routes = [
  { path: 'contactos', component: ContactosComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'nuevo', component: NuevoContactoComponent },
  { path: 'editar/:id', component: NuevoContactoComponent },
  { path: '**' , redirectTo: '/contactos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
