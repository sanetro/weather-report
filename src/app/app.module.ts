import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { CalendarComponent } from './calendar/calendar.component';

import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';
import { SelectdayModule } from './selectday/selectday.module';
import { CalendarModule } from './calendar/calendar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarModule,
    AppRoutingModule,
    HomeModule,
    FooterModule,
    SelectdayModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
