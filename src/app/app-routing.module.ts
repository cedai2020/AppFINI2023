import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'programa',
    loadChildren: () => import('./programa/programa.module').then( m => m.ProgramaPageModule)
  },
  {
    path: 'concurso',
    loadChildren: () => import('./concurso/concurso.module').then( m => m.ConcursoPageModule)
  },
  {
    path: 'pais-invitado',
    loadChildren: () => import('./pais-invitado/pais-invitado.module').then( m => m.PaisInvitadoPageModule)
  },
  {
    path: 'artistas-invitados',
    loadChildren: () => import('./artistas-invitados/artistas-invitados.module').then( m => m.ArtistasInvitadosPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
