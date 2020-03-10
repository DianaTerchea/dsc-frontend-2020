import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TimeTableService {
  private messageSrc = new Subject<string>();
  message = this.messageSrc.asObservable();
  constructor(private http: HttpClient) {}
  sendMessage(msg: string) {
    this.messageSrc.next(msg);
  }

  public getTimeTableData() {
    return this.http.get("https://api.openbrewerydb.org/breweries");
  }
}
