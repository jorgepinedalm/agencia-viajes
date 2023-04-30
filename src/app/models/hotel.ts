import { City } from "./city";
import { Room } from "./room";

export interface Hotel {
    code:string;
    name:string;
    city:City;
    rating:number;
    rooms?:Room[];
    averageCost?:number;
    minCost?:number;
    disabled:boolean;
}
