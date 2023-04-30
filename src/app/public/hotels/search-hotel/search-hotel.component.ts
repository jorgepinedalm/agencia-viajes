import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent {
  form:FormGroup;
  todayDate:Date;

  constructor(
    private fb:FormBuilder,
    private router: Router
  ) {
    this.todayDate = new Date();              
      this.form = this.fb.group({
          dates: ['',Validators.required],
          numberPeople: [1,Validators.required],
          city: ['',Validators.required]
      });
  }
}
