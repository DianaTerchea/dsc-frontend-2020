import { Component, OnInit } from '@angular/core';
import { TimeTableService } from '../../services/time-table.service';

@Component({
  selector: 'app-week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.scss']
})
export class WeekDaysComponent {
  constructor(private _timetableService: TimeTableService) {}
  updateDay(day) {
    this._timetableService.sendMessage(day);
  }
}
