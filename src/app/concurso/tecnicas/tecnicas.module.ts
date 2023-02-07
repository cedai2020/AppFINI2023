import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicasPageRoutingModule } from './tecnicas-routing.module';

import { TecnicasPage } from './tecnicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicasPageRoutingModule
  ],
  declarations: [TecnicasPage]
})
export class TecnicasPageModule {}
