import { PasswordRecoveryComponent } from './session/pages/password-recovery/password-recovery.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTableComponent } from './timetable/components';
import { RegisterComponent, LoginComponent } from './session/pages';
import {
  NonauthGuardService as NonAuthGuard
} from './session/services/nonauth-guard.service';
import { AuthGuardService } from './session/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TimeTableComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        /* canActivate: [NonAuthGuard] */
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
