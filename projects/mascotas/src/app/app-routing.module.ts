import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMascotasComponent } from './vistas/listado-mascotas/listado-mascotas.component';
import { FormularioMascotasComponent } from './vistas/formulario-mascotas/formulario-mascotas.component';

const routes: Routes = [
  { path: '', component: ListadoMascotasComponent },
  { path: 'lista/:especie', component: ListadoMascotasComponent },
  { path: 'nueva', component: FormularioMascotasComponent },
  { path: 'edit/:id', component: FormularioMascotasComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
