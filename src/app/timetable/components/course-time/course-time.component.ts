import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-time',
  templateUrl: './course-time.component.html',
  styleUrls: ['./course-time.component.scss']
})
export class CourseTimeComponent implements OnInit {

  @Input('startTime') startTime: Date;
  @Input('endTime') endTime: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
