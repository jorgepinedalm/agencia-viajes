import { Injectable } from '@angular/core';
import { FilterDataHotel } from '../models/filter-data-hotel';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  selectedRoom?:Room;

  constructor() { }

  selectRoom(room:Room):void{
    this.selectedRoom = room;
  }

  getSelectedRoom():Room | undefined {
    return this.selectedRoom;
  }

}
