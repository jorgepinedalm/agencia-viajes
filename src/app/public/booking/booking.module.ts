import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookHotelComponent } from './book-hotel/book-hotel.component';
import { BookingComponent } from './booking.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { CheckinGuestsComponent } from './checkin-guests/checkin-guests.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    BookingComponent,
    BookHotelComponent,
    CheckinGuestsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BookingRoutingModule,
    ButtonModule,
    TagModule,
    DataViewModule,
    CardModule,
    AccordionModule,
    InputTextModule,
    DropdownModule,
    CalendarModule
  ]
})
export class BookingModule { }
