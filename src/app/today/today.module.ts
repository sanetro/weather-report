import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayComponent } from './today.component';



@NgModule({
  declarations: [
    TodayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodayComponent
  ]
})
export class TodayModule { }
