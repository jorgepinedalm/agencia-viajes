import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {

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
