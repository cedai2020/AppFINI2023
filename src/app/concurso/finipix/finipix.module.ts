import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinipixPageRoutingModule } from './finipix-routing.module';

import { FinipixPage } from './finipix.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinipixPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FinipixPage]
})
export class FinipixPageModule {}
