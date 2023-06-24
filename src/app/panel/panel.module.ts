import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }
