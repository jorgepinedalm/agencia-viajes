import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { HotelsComponent } from './hotels.component';
import { HotelsRoutingModule } from './hotels-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    ListHotelComponent,
    SearchHotelComponent,
    HotelsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HotelsRoutingModule,
    CardModule,
    CalendarModule,
    InputNumberModule
  ]
})
export class HotelsModule { }
