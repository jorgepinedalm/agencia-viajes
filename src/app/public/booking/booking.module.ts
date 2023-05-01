import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookHotelComponent } from './book-hotel/book-hotel.component';
import { BookingComponent } from './booking.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';


@NgModule({
  declarations: [
    BookingComponent,
    BookHotelComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ButtonModule,
    TagModule,
    DataViewModule
  ]
})
export class BookingModule { }
