import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectdayComponent } from './selectday.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { CalendarModule } from '../calendar/calendar.module';



@NgModule({
  declarations: [
    SelectdayComponent
  ],
  imports: [
    CommonModule,
    CalendarModule
  ],
  exports: [
    SelectdayComponent
  ]
})
export class SelectdayModule { }
