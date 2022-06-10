import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Day } from './day';
import { DAYS } from './mock-days';


@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor(private messageService:  MessageService) { }

  getDays(): Observable <Day[]> {
    const days =  of(DAYS);
    this.messageService.add('DaysService: fetched days');
    return days

  }
}
