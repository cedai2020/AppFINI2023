import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FechasPage } from './fechas.page';

const routes: Routes = [
  {
    path: '',
    component: FechasPage
  },
  {
    path: 'actividades',
    loadChildren: () => import('./actividades/actividades.module').then( m => m.ActividadesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FechasPageRoutingModule {}
