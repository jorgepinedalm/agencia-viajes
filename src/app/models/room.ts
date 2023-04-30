import { RoomLocation } from "./room-location";

export interface Room {
    code:string;
    descripcion:string;
    roomType:string;
    cost:number;
    tax:number;
    booked:boolean;
    disabled:boolean;
    location:RoomLocation;
}
