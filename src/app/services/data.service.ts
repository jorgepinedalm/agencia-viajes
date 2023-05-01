import { Injectable } from '@angular/core';
import { RoomType, RoomType as RoomTypeEnum } from '../enums/room-type';
import { Hotel } from '../models/hotel';
import { Observable, of } from 'rxjs';
import { City } from '../models/city';
import { ListValue } from '../list-value';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  mockData():Hotel[]{
    return [
      {
        id: 1,
        city: {code: "SMR", name: "SANTA MARTA"},
        name: "Hotel Colombia Real",
        rating: 4.8,
        disabled: false,
        rooms: [
          {
            code: "H1101",
            descripcion: "Habitación sencilla",
            booked:false,
            capacity: 1,
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
            capacity: 2,
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
            capacity: 2,
            cost: 130500,
            disabled: false,
            tax: 24795,
            roomType: RoomType.DOBLE,
            location: {
              floor: 1,
              number: 3
            }
          },
          {
            code: "H2101",
            descripcion: "Habitación familiar",
            booked:false,
            capacity: 4,
            cost: 230000,
            disabled: false,
            tax: 43700,
            roomType: RoomType.FAMILIAR,
            location: {
              floor: 2,
              number: 1
            }
          }
        ]
      },
      {
        id: 2,
        city: {code: "BOG", name: "BOGOTA"},
        name: "Hotel Conform Capital",
        rating: 3,
        disabled: false,
        rooms: [
          {
            code: "H1101",
            descripcion: "Habitación sencilla",
            booked:false,
            capacity: 1,
            cost: 125000,
            disabled: false,
            tax: 23750,
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
            capacity: 1,
            cost: 100000,
            disabled: false,
            tax: 19000,
            roomType: RoomType.SENCILLA,
            location: {
              floor: 1,
              number: 2
            }
          },
          {
            code: "H2101",
            descripcion: "Habitación king",
            booked:false,
            capacity: 3,
            cost: 200000,
            disabled: false,
            tax: 38000,
            roomType: RoomType.KING,
            location: {
              floor: 2,
              number: 1
            }
          },
          {
            code: "H1103",
            descripcion: "Habitación doble",
            booked:false,
            capacity: 2,
            cost: 150000,
            disabled: false,
            tax: 28500,
            roomType: RoomType.DOBLE,
            location: {
              floor: 1,
              number: 3
            }
          }
        ]
      },
      {
        id: 3,
        city: {code: "BOG", name: "BOGOTA"},
        name: "Hilton Garden Inn Bogota Airport",
        rating: 5,
        disabled: false,
        rooms: [
          {
            code: "H1101",
            descripcion: "Habitación sencilla",
            booked:false,
            capacity: 1,
            cost: 125000,
            disabled: false,
            tax: 23750,
            roomType: RoomType.SENCILLA,
            location: {
              floor: 1,
              number: 1
            }
          },
          {
            code: "H1102",
            descripcion: "Habitación sencilla",
            booked:true,
            capacity: 1,
            cost: 99900,
            disabled: false,
            tax: 23750,
            roomType: RoomType.SENCILLA,
            location: {
              floor: 1,
              number: 2
            }
          },
          {
            code: "H1103",
            descripcion: "Habitación sencilla",
            booked:false,
            capacity: 1,
            cost: 100000,
            disabled: false,
            tax: 19000,
            roomType: RoomType.SENCILLA,
            location: {
              floor: 1,
              number: 3
            }
          },
          {
            code: "H2101",
            descripcion: "Habitación king",
            booked:false,
            capacity: 2,
            cost: 200000,
            disabled: false,
            tax: 38000,
            roomType: RoomType.KING,
            location: {
              floor: 2,
              number: 1
            }
          },
          {
            code: "H1103",
            descripcion: "Habitación doble",
            booked:false,
            capacity: 2,
            cost: 150000,
            disabled: false,
            tax: 28500,
            roomType: RoomType.DOBLE,
            location: {
              floor: 1,
              number: 3
            }
          }
        ]
      },
      {
        id: 4,
        city: {code: "CTG", name: "CARTAGENA"},
        name: "Estelar Cartagena de Indias Hotel y Centro de Convenciones",
        rating: 4.5,
        disabled: false,
        rooms: [
          {
            code: "H1101",
            descripcion: "Habitación familiar",
            booked:true,
            capacity: 6,
            cost: 250000,
            disabled: false,
            tax: 47500,
            roomType: RoomType.FAMILIAR,
            location: {
              floor: 1,
              number: 1
            }
          }
        ]
      }
    ];
  }

  getCities():Observable<City[]>{
    const cities:City[] = [
      {
        code: "SMR",
        name: "Santa Marta"
      },
      {
        code: "BOG",
        name: "Bogota"
      },
      {
        code: "CTG",
        name: "Cartagena"
      },
      {
        code: "MDE",
        name: "Medellin"
      }
    ]
    return of(cities);
  }

  getTypesID():Observable<ListValue[]>{
    const types:ListValue[] = [
      {
        id: 1,
        code: "CC",
        value: "Cedula de ciudadania"
      },
      {
        id: 2,
        code: "TI",
        value: "Tarjeta de identidad"
      },
      {
        id: 3,
        code: "PAS",
        value: "Pasaporte"
      }
    ]
    return of(types);
  }

  getGenders():Observable<ListValue[]>{
    const genders:ListValue[] = [
      {
        id: 1,
        value: "Hombre"
      },
      {
        id: 2,
        value: "Mujer"
      },
      {
        id: 3,
        value: "Otro"
      }
    ]
    return of(genders);
  }

}
