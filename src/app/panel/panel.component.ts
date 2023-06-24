import { Component, Input } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})

export class PanelComponent {
  @Input() date: any;
  @Input() day: any;
  @Input() time: any;
  @Input() temperature: any;
}
