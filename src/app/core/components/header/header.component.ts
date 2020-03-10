import { Component, OnInit, Input } from "@angular/core";
import { TimeTableService } from "../../../timetable/services/time-table.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  weekDay: string = "Monday";
  constructor(private _timetableService$: TimeTableService) {}
  ngOnInit() {
    this._timetableService$.message.subscribe(msg => {
      switch (msg) {
        case "MON":
          this.weekDay = "Monday";
          break;
        case "TUE":
          this.weekDay = "Tuesday";
          break;
        case "WED":
          this.weekDay = "Wednesday";
          break;
        case "THU":
          this.weekDay = "Thursday";
          break;
        case "FRI":
          this.weekDay = "Friday";
          break;
        case "SAT":
          this.weekDay = "Saturday";
          break;
        case "SUN":
          this.weekDay = "Sunday";
      }
    });
  }
}
