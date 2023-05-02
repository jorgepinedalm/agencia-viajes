import { Injectable } from '@angular/core';
import { FilterDataHotel } from '../models/filter-data-hotel';
import { Room } from '../models/room';
import { Booking } from '../booking';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  selectedRoom?:Room;
  bookings:Booking[];

  constructor() { 
    this.bookings = [];
  }

  selectRoom(room:Room):void{
    this.selectedRoom = room;
  }

  getSelectedRoom():Room | undefined {
    return this.selectedRoom;
  }

  save(booking:Booking):Observable<boolean>{
    this.bookings.push(booking);
    return of(true);
  }

}
