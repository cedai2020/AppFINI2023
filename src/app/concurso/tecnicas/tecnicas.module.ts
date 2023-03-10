import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicasPageRoutingModule } from './tecnicas-routing.module';

import { TecnicasPage } from './tecnicas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TecnicasPage]
})
export class TecnicasPageModule {}
