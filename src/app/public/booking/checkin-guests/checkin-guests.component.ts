import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/models/room';
import { BookingService } from 'src/app/services/booking.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-checkin-guests',
  templateUrl: './checkin-guests.component.html',
  styleUrls: ['./checkin-guests.component.scss']
})
export class CheckinGuestsComponent {
  room?:Room;
  guestsForm : FormGroup;
  today:Date;
  idHotel:number;
  constructor(
    private hotelService:HotelService,
    private bookingService:BookingService,
    private fb :FormBuilder,
    private route: ActivatedRoute
  ){
    
    const paramIdHotel = this.route.snapshot.paramMap.get("id") as string;
    this.idHotel = parseInt(paramIdHotel);
    const codeRoom = this.route.snapshot.paramMap.get("idRoom") as string;
    this.getSelectedRoom(this.idHotel, codeRoom);

    this.guestsForm = this.fb.group({    
      idHotel : [this.idHotel],
      codeRoom: [codeRoom],    
      guests: this.fb.array([this.buildFormDynamic()])    
    })  
    this.today = new Date();
  }

  getSelectedRoom(idHotel:number, codeRoom:string):void{
    this.hotelService.getRoomById(idHotel, codeRoom).subscribe(
      (room:Room | undefined) => {
        this.room = room;
      }
    )
  }

  addGuest():void{
    this.guests.push(this.buildFormDynamic());
  }

  removeGuest(indexForm:number):void{
    this.guests.removeAt(indexForm);
  }
  
  buildFormDynamic():FormGroup{    
    return this.fb.group({    
          firstName:['',Validators.required],    
          lastName:['',Validators.required],  
          birthdate:['',Validators.required],    
          gender :['',Validators.required],
          typeID :['',Validators.required],
          numberID :['',Validators.required],
          email :['',Validators.required],
          phone :['',Validators.required],
          nameContactEmergency :['',Validators.required],
          phoneContactEmergency :['',Validators.required],
     })    
  }
  get guests() {
    return this.guestsForm.controls["guests"] as FormArray;
  } 
}
