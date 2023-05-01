import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RoomType } from '../enums/room-type';
import { DataService } from './data.service';
import { Room } from '../models/room';
import { FilterDataHotel } from '../models/filter-data-hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private hotels:Hotel[];
  private $hotels:BehaviorSubject<Hotel[]>;

  constructor(
    private dataService:DataService
  ) {
    
    this.$hotels = new BehaviorSubject<Hotel[]>(this.mockData());
    this.hotels = this.mockData();
   }

   private mockData():Hotel[]{
    const hotels = this.dataService.mockData();
    return hotels.map(
      hotel => {
        if(hotel.rooms) hotel.minCost = Math.min.apply(Math, hotel.rooms.map(function(val) { return val.cost; }));
        hotel.busy = hotel.rooms?.every(room => room.booked);
        return hotel;
      }
    )
   }

  getHotels():Observable<Hotel[]>{
    return this.$hotels.asObservable();
  }

  getHotelById(id:number):Hotel | undefined{
    return this.hotels.find(hotel => hotel.id == id);
  }

  getRoomsFromHotel(idHotel:number):Room[]{
    const hotel = this.hotels.find(hotel => hotel.id == idHotel);
    return hotel && hotel.rooms ? hotel.rooms : [];
  }

  getRoomById(idHotel:number, codeRoom:string):Observable<Room | undefined>{
    return of(this.hotels.find(hotel => hotel.id == idHotel)?.rooms?.find(room => room.code == codeRoom));
  }

  create(hotel:Hotel):Observable<boolean>{
    this.hotels.push(hotel);
    return of(true);
  }

  disable(hotel:Hotel):Observable<boolean>{
    const foundHotel = this.hotels.find(hotelItem => hotelItem.id == hotel.id);
    if(foundHotel){
      foundHotel.disabled = false;
    }
    return of(true);
  }

  enable(hotel:Hotel):Observable<boolean>{
    const foundHotel = this.hotels.find(hotelItem => hotelItem.id == hotel.id);
    if(foundHotel){
      foundHotel.disabled = false;
    }
    return of(true);
  }

  update(hotel:Hotel):Observable<boolean>{
    const foundHotel = this.hotels.findIndex(hotelItem => hotelItem.id == hotel.id);
    this.hotels[foundHotel] = hotel;
    return of(true);
  }

  delete(hotel:Hotel):Observable<boolean>{
    const foundHotel = this.hotels.findIndex(hotelItem => hotelItem.id == hotel.id);
    this.hotels.splice(foundHotel, 1);
    return of(true);
  }

  search(filter:FilterDataHotel):void{
    let hotels = this.hotels;
    hotels = hotels.filter(
      hotel => hotel.city.code == filter.city && hotel.rooms?.some(room => room.capacity <= filter.numberPeople))
    this.$hotels.next(hotels);
  }
}
