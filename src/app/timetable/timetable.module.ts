import { NgModule } from '@angular/core';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { WeekDaysComponent } from './components/week-days/week-days.component';
import { CourseComponent } from './components/course/course.component';
import { CourseTimeComponent } from './components/course-time/course-time.component';
import { CourseContentComponent } from './components/course-content/course-content.component';

@NgModule({
  declarations: [TimeTableComponent, WeekDaysComponent, CourseComponent, CourseTimeComponent, CourseContentComponent],
  imports: [],
})
export class TimeTableModule { }
