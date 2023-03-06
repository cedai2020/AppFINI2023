import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinipixPage } from './finipix.page';

const routes: Routes = [
  {
    path: '',
    component: FinipixPage
  },  {
    path: 'concursantes',
    loadChildren: () => import('./concursantes/concursantes.module').then( m => m.ConcursantesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinipixPageRoutingModule {}
