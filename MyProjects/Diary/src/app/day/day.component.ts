import { Component, OnInit } from '@angular/core';

import { Day } from '../day';
import { DayService } from '../day.service';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  days: Day[]=[];
/*
  day: Day = {
    dayName: 'Monday',
    dayDate: "7.6.2022"
  }
  */
  constructor(private dayService: DayService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.getDays();
  }
  selectedDay?: Day;

  onSelect(day: Day){
   this.selectedDay = day;
  }

  getDays(): void {
    this.dayService.getDays().subscribe(days => this.days = days);

  }

}
