import { Injectable } from '@angular/core';
import { RoomType, RoomType as RoomTypeEnum } from '../enums/room-type';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  mockData():Hotel[]{
    return [
      {
        code: "H1",
        city: {code: "SMR", name: "SANTA MARTA"},
        name: "Hotel Colombia Real",
        rating: 4.8,
        disabled: false,
        rooms: [
          {
            code: "H1101",
            descripcion: "Habitación sencilla",
            booked:false,
            cost: 95000,
            disabled: false,
            tax: 18050,
            roomType: RoomType.SENCILLA,
            location: {
              floor: 1,
              number: 1
            }
          },
          {
            code: "H1102",
            descripcion: "Habitación sencilla",
            booked:false,
            cost: 105000,
            disabled: false,
            tax: 19950,
            roomType: RoomType.SENCILLA,
            location: {
              floor: 1,
              number: 2
            }
          },
          {
            code: "H1103",
            descripcion: "Habitación doble",
            booked:false,
            cost: 130500,
            disabled: false,
            tax: 24795,
            roomType: RoomType.DOBLE,
            location: {
              floor: 1,
              number: 3
            }
          }
        ]
      },
      {
        code: "H2",
        city: {code: "BOG", name: "BOGOTA"},
        name: "Hotel Conform Capital",
        rating: 3,
        disabled: false
      },
      {
        code: "H3",
        city: {code: "BOG", name: "BOGOTA"},
        name: "Hilton Garden Inn Bogota Airport",
        rating: 5,
        disabled: false
      },
      {
        code: "H4",
        city: {code: "CTG", name: "CARTAGENA"},
        name: "Estelar Cartagena de Indias Hotel y Centro de Convenciones",
        rating: 4.5,
        disabled: false
      }
    ];
  }

}
