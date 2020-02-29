import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTableComponent } from './timetable/components';

const routes: Routes = [
  {
    path: '',
    component: TimeTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
