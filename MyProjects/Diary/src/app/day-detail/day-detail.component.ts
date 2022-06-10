import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../day';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css']
})
export class DayDetailComponent implements OnInit {

  @Input() day?: Day;

  constructor() { }

  ngOnInit(): void {
  }

}
