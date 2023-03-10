import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramaPage } from './programa.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaPage
  },
  {
    path: 'fechas',
    loadChildren: () => import('./fechas/fechas.module').then( m => m.FechasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramaPageRoutingModule {}
