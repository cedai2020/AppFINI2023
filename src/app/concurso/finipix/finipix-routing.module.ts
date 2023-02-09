import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinipixPage } from './finipix.page';

const routes: Routes = [
  {
    path: '',
    component: FinipixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinipixPageRoutingModule {}
