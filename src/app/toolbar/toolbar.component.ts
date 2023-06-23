import { Component } from '@angular/core';
import {Router, Routes } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private router: Router) {
  }

  onHomeRoute() {
    this.router.navigate(["/"]);
  }

  onTodayRoute() {
    this.router.navigate(["/today"]);
  }

  onSelectDayRoute() {
    this.router.navigate(["/select-day"]);
  }

}
