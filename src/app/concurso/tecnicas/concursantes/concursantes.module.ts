import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcursantesPageRoutingModule } from './concursantes-routing.module';

import { ConcursantesPage } from './concursantes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcursantesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConcursantesPage]
})
export class ConcursantesPageModule {}
