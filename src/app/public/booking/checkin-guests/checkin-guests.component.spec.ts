import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinGuestsComponent } from './checkin-guests.component';

describe('CheckinGuestsComponent', () => {
  let component: CheckinGuestsComponent;
  let fixture: ComponentFixture<CheckinGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinGuestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
