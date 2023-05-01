import { City } from "./city";
import { Room } from "./room";

export interface Hotel {
    id:number;
    name:string;
    city:City;
    rating:number;
    rooms?:Room[];
    averageCost?:number;
    minCost?:number;
    busy?:boolean;
    disabled:boolean;
}
