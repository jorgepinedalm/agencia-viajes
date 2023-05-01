import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  hotel?:Hotel;

  constructor(
    private route: ActivatedRoute,
    private hotelService:HotelService
  ){
    const paramId:string = this.route.snapshot.firstChild?.paramMap.get("id") as string;
    const idHotel:number = parseInt(paramId);
    this.getHotel(idHotel);
  }

  getHotel(id:number):void{
    this.hotel = this.hotelService.getHotelById(id)
  }
}
