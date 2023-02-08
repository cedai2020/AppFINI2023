import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FalsoFooterComponent } from './falso-footer/falso-footer.component';



@NgModule({
  declarations: [FalsoFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FalsoFooterComponent  ],
})
export class ComponentsModule { }
