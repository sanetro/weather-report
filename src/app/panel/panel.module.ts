import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';





@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }
