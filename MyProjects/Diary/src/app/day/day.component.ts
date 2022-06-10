import { Component, OnInit } from '@angular/core';

import { Day } from '../day';
import { DAYS } from '../mock-days';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

days = DAYS;

  day: Day = {
    dayName: 'Monday',
    dayDate: "7.6.2022"
  }
  constructor() { }

  ngOnInit(): void {
  }
  selectedDay?: Day;

  onSelect(day: Day){
   this.selectedDay = day;
  }

}
