import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { HotelsComponent } from './hotels.component';
import { HotelsRoutingModule } from './hotels-routing.module';



@NgModule({
  declarations: [
    ListHotelComponent,
    SearchHotelComponent,
    HotelsComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule { }
