import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  idHotel:number;

  constructor(
    private route: ActivatedRoute,
    private hotelService:HotelService,
    private router:Router
  ){
    this.rooms = [];
    const paramId:string = this.route.snapshot.paramMap.get("id") as string;
    this.idHotel = parseInt(paramId);
    this.getRoomsFromHotel(this.idHotel);
  }

  getRoomsFromHotel(idHotel:number):void{
    this.rooms = this.hotelService.getRoomsFromHotel(idHotel);
  }

  checkinGuests(selectedRoom:Room):void{
    this.router.navigateByUrl(`/booking/${this.idHotel}/book-hotel/${selectedRoom.code}/checkin-guests`)
  }
}
