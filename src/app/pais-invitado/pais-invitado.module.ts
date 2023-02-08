import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaisInvitadoPageRoutingModule } from './pais-invitado-routing.module';

import { PaisInvitadoPage } from './pais-invitado.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaisInvitadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PaisInvitadoPage]
})
export class PaisInvitadoPageModule {}
