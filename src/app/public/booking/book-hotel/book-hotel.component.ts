import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { Room } from 'src/app/models/room';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-book-hotel',
  templateUrl: './book-hotel.component.html',
  styleUrls: ['./book-hotel.component.scss']
})
export class BookHotelComponent {

  rooms:Room[];

  constructor(
    private route: ActivatedRoute,
    private hotelService:HotelService
  ){
    this.rooms = [];
    const paramId:string = this.route.snapshot.paramMap.get("id") as string;
    const idHotel:number = parseInt(paramId);
    this.getRoomsFromHotel(idHotel);
  }

  getRoomsFromHotel(idHotel:number):void{
    this.rooms = this.hotelService.getRoomsFromHotel(idHotel);
  }
}
