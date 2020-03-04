import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  constructor(private http:HttpClient) { }

 public getTimeTableData() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
