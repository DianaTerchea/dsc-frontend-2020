import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTableComponent } from './timetable/components';
import { RegisterComponent, LoginComponent } from './session/pages';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TimeTableComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
