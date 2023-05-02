import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Hotel } from 'src/app/models/hotel';
import { DataService } from 'src/app/services/data.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.scss']
})
export class ListHotelComponent {

  hotels:Hotel[];
  sortOptions: SelectItem[];
  keepFilters:boolean;

  constructor(
    private hotelService:HotelService,
    private dataService:DataService,
    private router:Router
  ){
    this.keepFilters = false;
    this.hotels = [];
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
    this.getHotels();
  }

  ngOnDestroy(): void {
    if(!this.keepFilters) this.dataService.clearFilters();
  }

  getHotels():void{
    this.hotelService.getHotels().subscribe(
      (hotel:Hotel[]) => {
        this.hotels = hotel;
      }
    )
  }

  goToBookHotel(hotel:Hotel):void{
    this.keepFilters = true;
    this.router.navigateByUrl(`/booking/${hotel.id}/book-hotel`);
  }

}
