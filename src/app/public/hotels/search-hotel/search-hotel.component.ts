import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { DataService } from 'src/app/services/data.service';

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
    private dataService:DataService
  ) {
    this.todayDate = new Date();              
      this.form = this.fb.group({
          dates: ['',Validators.required],
          numberPeople: [1,Validators.required],
          city: ['',Validators.required]
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
}
