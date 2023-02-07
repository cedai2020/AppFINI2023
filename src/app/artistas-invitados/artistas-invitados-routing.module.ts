import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistasInvitadosPage } from './artistas-invitados.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistasInvitadosPage
  },
  {
    path: 'artista',
    loadChildren: () => import('./artista/artista.module').then( m => m.ArtistaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistasInvitadosPageRoutingModule {}
