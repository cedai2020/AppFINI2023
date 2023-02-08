import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FechasPageRoutingModule } from './fechas-routing.module';

import { FechasPage } from './fechas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FechasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FechasPage]
})
export class FechasPageModule {}
