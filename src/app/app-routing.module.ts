import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTableComponent } from './timetable/components';
import { RegisterComponent, LoginComponent } from './session/pages';
import {
  NonauthGuardService as NonAuthGuard
} from './session/services/nonauth-guard.service';
import { PassThrough } from 'stream';
import { PasswordRecoveryTwoComponent } from './session/pages/password-recovery-two/password-recovery-two.component';

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
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
      },
      {
        path: 'forgotpassword2',
        component: PasswordRecoveryTwoComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
