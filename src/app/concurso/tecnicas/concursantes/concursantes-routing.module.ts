import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcursantesPage } from './concursantes.page';

const routes: Routes = [
  {
    path: '',
    component: ConcursantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcursantesPageRoutingModule {}
