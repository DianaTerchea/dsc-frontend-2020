import { Component, OnInit } from "@angular/core";
import { TimeTableService } from "../../services/time-table.service";

@Component({
  selector: "app-week-days",
  templateUrl: "./week-days.component.html",
  styleUrls: ["./week-days.component.scss"]
})
export class WeekDaysComponent implements OnInit {
  constructor(private _timetableService: TimeTableService) {}
  updateDay(event) {
    this._timetableService.sendMessage(event.target.innerText);
  }
  ngOnInit() {}
}
