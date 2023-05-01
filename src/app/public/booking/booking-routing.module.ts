import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { BookHotelComponent } from './book-hotel/book-hotel.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [
      {
        path: ":id/book-hotel",
        component: BookHotelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
