import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcursantesPage } from './concursantes.page';

const routes: Routes = [
  {
    path: '',
    component: ConcursantesPage
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcursantesPageRoutingModule {}
