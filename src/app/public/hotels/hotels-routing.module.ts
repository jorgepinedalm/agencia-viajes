import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { BookHotelComponent } from '../booking/book-hotel/book-hotel.component';

const routes: Routes = [
  {
    path: '',
    component: HotelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
