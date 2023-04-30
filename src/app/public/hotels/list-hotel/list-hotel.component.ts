import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.scss']
})
export class ListHotelComponent {

  hotels:Hotel[];
  sortOptions: SelectItem[];

  constructor(
    private hotelService:HotelService
  ){
    this.hotels = [];
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
    this.getHotels();
  }

  getHotels():void{
    this.hotelService.getHotels().subscribe(
      (hotel:Hotel[]) => {
        this.hotels = hotel;
      }
    )
  }

}
