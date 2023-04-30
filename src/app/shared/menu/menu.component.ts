import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  items:MenuItem[];

  constructor(){
    this.items = [
      {
        label: "Hoteles",
        routerLink: "hotels"
      }
    ];
  }
}
