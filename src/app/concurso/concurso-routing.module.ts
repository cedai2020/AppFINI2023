import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcursoPage } from './concurso.page';

const routes: Routes = [
  {
    path: '',
    component: ConcursoPage
  },
  {
    path: 'tecnicas',
    loadChildren: () => import('./tecnicas/tecnicas.module').then( m => m.TecnicasPageModule)
  },
  {
    path: 'finipix',
    loadChildren: () => import('./finipix/finipix.module').then( m => m.FinipixPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcursoPageRoutingModule {}
