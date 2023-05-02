import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ListValue } from 'src/app/list-value';
import { Room } from 'src/app/models/room';
import { BookingService } from 'src/app/services/booking.service';
import { DataService } from 'src/app/services/data.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-checkin-guests',
  templateUrl: './checkin-guests.component.html',
  styleUrls: ['./checkin-guests.component.scss']
})
export class CheckinGuestsComponent implements OnInit {
  room?:Room;
  guestsForm : FormGroup;
  today:Date;
  idHotel:number;
  typesID:ListValue[];
  genders:ListValue[];
  dates:Date[];
  constructor(
    private dataService:DataService,
    private hotelService:HotelService,
    private bookingService:BookingService,
    private fb :FormBuilder,
    private route: ActivatedRoute,
    private router:Router
  ){
    
    const paramIdHotel = this.route.snapshot.paramMap.get("id") as string;
    this.idHotel = parseInt(paramIdHotel);
    const codeRoom = this.route.snapshot.paramMap.get("idRoom") as string;
    this.getSelectedRoom(this.idHotel, codeRoom);

    const selectedDate = this.dataService.getFilters();
    this.dates = selectedDate ? [selectedDate.entryDate as Date, selectedDate.departureDate as Date] : [];
    this.guestsForm = this.fb.group({    
      idHotel : [this.idHotel],
      codeRoom: [codeRoom],
      guests: this.fb.array([this.buildFormDynamic()])    
    })  
    this.today = new Date();
    this.typesID = [];
    this.genders = [];
  }
  ngOnInit(): void {
    this.getListDataForm();
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

  getListDataForm():void{
    forkJoin({
      typesID: this.dataService.getTypesID(),
      genders: this.dataService.getGenders()
    }).subscribe(
      lists => {
        this.typesID = lists.typesID;
        this.genders = lists.genders;
      }
    )
  }

  enableFinishButton():boolean{
    return this.guests.controls.every(control => control.valid);
  }

  bookingRoom():void{
    const booking = {...this.guestsForm.value, entryDate: this.dates[0], departureDate: this.dates[1]};
    this.bookingService.save(booking).subscribe(
      () => {
        this.router.navigateByUrl("/hotels");
        alert("Reserva guardada exitosamente");
      }
    )
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
