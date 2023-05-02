import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  cities:any[];

  constructor(
    private fb:FormBuilder,
    private dataService:DataService,
    private hotelService:HotelService
  ) {
    this.todayDate = new Date();              
      this.form = this.fb.group({
          dates: ['',Validators.required],
          numberPeople: [1,Validators.required],
          city: new FormControl(null, [Validators.required])
      });
      this.cities = [];
  }

  ngOnInit(): void {
    const filters = this.dataService.getFilters();
    if(filters){
      this.form.patchValue({...filters, dates: [filters.entryDate, filters.departureDate]});
      this.hotelService.search(filters);
    }
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
    this.dataService.saveFilters(filters);
    this.hotelService.search(filters);
  }

  clearFilter():void{
    this.dataService.clearFilters();
    this.form.reset();
    this.hotelService.search();
  }
}
