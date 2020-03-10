import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  @Input('title') title: string;
  @Input('room') room: string;

  constructor() { }

  ngOnInit(): void {
  }

}
