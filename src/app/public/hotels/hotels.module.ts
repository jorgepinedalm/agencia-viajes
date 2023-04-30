import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { HotelsComponent } from './hotels.component';
import { HotelsRoutingModule } from './hotels-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';

@NgModule({
  declarations: [
    ListHotelComponent,
    SearchHotelComponent,
    HotelsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HotelsRoutingModule,
    CardModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule,
    ButtonModule,
    RatingModule,
    TagModule,
    DataViewModule
  ]
})
export class HotelsModule { }
