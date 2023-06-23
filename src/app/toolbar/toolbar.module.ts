import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
