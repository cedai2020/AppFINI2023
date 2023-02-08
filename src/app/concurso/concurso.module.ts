import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcursoPageRoutingModule } from './concurso-routing.module';

import { ConcursoPage } from './concurso.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcursoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConcursoPage]
})
export class ConcursoPageModule {}
