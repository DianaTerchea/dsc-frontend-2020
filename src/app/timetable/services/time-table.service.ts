import { Course } from './../components/models/course.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {
  public message$ = new Subject<string>();
  private readonly api = 'https://dsc-schedule.herokuapp.com/schedule';
  // tslint:disable-next-line: max-line-length
  private readonly token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyOmlkIjoiNWViMDRkMGU5NGVlNWMwMDE3MDczMDAyIiwiaWF0IjoxNTg4NjEyNDM2LCJleHAiOjE1ODkyMTcyMzZ9.gbsdjvcBlx5xepgMmS25S1mjQQsXbh3tHMuJRP0l6UQ';
  constructor(private http: HttpClient) {
  }
  sendMessage(msg: string) {
    this.message$.next(msg);
  }

  private extractData(res: Response) {
    const courses: Course[] = [];
    let i;
    const body = res["schedule"]["Luni"];
    for ( i = 0; i < body.length; i++) {

      // tslint:disable-next-line: max-line-length
      const course = new Course(body[i]['De la'], body[i]['Pana la'], body[i]['Grupa'], body[i]['Disciplina'], body[i]['Tip'], body[i]['Profesor'], body[i]['Sala']);
      courses[i] = course;
  }
    return courses;
  }
  public getTimeTableData(): Observable<Course[]> {
   const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
   const urlValue = `${this.api}/year/1/semester/1`;
   return this.http.get<any>(urlValue, {headers}).pipe(
     map(res =>{this.extractData(res);})
   );
  }
}
