import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { FilterDataHotel } from 'src/app/models/filter-data-hotel';
import { DataService } from 'src/app/services/data.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent implements OnInit {
  form:FormGroup;
  todayDate:Date;
  cities:any[]

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private dataService:DataService,
    private hotelService:HotelService
  ) {
    this.todayDate = new Date();              
      this.form = this.fb.group({
          dates: ['',Validators.required],
          numberPeople: [1,Validators.required],
          city: [undefined,Validators.required]
      });
      this.cities = [];
  }
  ngOnInit(): void {
    this.getCities();
  }

  getCities():void{
    this.dataService.getCities().subscribe(
      (cities:City[]) => {
        this.cities = cities;
      }
    )
  }

  search():void{
    const formValue = this.form.value;
    const filters:FilterDataHotel = {
      entryDate: formValue.dates[0],
      departureDate: formValue.dates[1],
      city: formValue.city,
      numberPeople: formValue.numberPeople
    }
    this.hotelService.search(filters);
  }
}
