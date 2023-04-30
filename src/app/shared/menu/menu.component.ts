import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items:MenuItem[];
  isUserLoggedIn:boolean;

  constructor(
    private authService: AuthService,
    private router:Router
  ){
    this.items = [
      {
        label: "Hoteles",
        routerLink: "hotels"
      }
    ];
    this.isUserLoggedIn = false;
  }
  ngOnInit(): void {
    this.watchUserLoggedIn();
  }

  watchUserLoggedIn():void{
    this.authService.isUserLoggedIn()
    .subscribe(
      state => {
        this.isUserLoggedIn = state;
      }
    );
  }

  logout():void{
    this.authService.logout().subscribe(
      () => this.router.navigateByUrl("/")
    );
  }

}
