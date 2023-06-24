import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PanelModule } from '../panel/panel.module';





@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PanelModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
