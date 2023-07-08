import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayModule } from './today/today.module';
import { TodayComponent } from './today/today.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { SelectdayComponent } from './selectday/selectday.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'today', component: TodayComponent },
  { path: 'select-day', component: SelectdayComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
