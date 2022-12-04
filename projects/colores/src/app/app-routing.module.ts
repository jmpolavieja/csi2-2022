import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColoresComponent } from './vistas/colores/colores.component';

const routes: Routes = [
  {
    path: '', component: ColoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
