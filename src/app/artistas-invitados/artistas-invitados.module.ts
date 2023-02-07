import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistasInvitadosPageRoutingModule } from './artistas-invitados-routing.module';

import { ArtistasInvitadosPage } from './artistas-invitados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistasInvitadosPageRoutingModule
  ],
  declarations: [ArtistasInvitadosPage]
})
export class ArtistasInvitadosPageModule {}
