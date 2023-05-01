import { Room } from "./room";

export interface Booking {
    entryDate:Date;
    departureDate:Date;
    room:Room;
    createdAt:Date;
}
