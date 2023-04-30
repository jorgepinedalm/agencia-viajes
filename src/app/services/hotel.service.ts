import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RoomType } from '../enums/room-type';
import { DataService } from './data.service';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private hotels:Hotel[];

  constructor(
    private dataService:DataService
  ) {
    this.hotels = this.dataService.mockData();
   }

  getHotels():Observable<Hotel[]>{
    this.hotels.map(
      hotel => {
        if(hotel.rooms) hotel.minCost = Math.min.apply(Math, hotel.rooms.map(function(val) { return val.cost; }))
        return hotel;
      }
    )
    return of(this.hotels);
  }

  create(hotel:Hotel):Observable<boolean>{
    this.hotels.push(hotel);
    return of(true);
  }

  disable(hotel:Hotel):Observable<boolean>{
    const foundHotel = this.hotels.find(hotelItem => hotelItem.code == hotel.code);
    if(foundHotel){
      foundHotel.disabled = false;
    }
    return of(true);
  }

  enable(hotel:Hotel):Observable<boolean>{
    const foundHotel = this.hotels.find(hotelItem => hotelItem.code == hotel.code);
    if(foundHotel){
      foundHotel.disabled = false;
    }
    return of(true);
  }

  update(hotel:Hotel):Observable<boolean>{
    const foundHotel = this.hotels.findIndex(hotelItem => hotelItem.code == hotel.code);
    this.hotels[foundHotel] = hotel;
    return of(true);
  }

  delete(hotel:Hotel):Observable<boolean>{
    const foundHotel = this.hotels.findIndex(hotelItem => hotelItem.code == hotel.code);
    this.hotels.splice(foundHotel, 1);
    return of(true);
  }
}
