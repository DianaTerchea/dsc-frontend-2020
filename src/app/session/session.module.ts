import { NgModule } from '@angular/core';
import {
  LoginComponent,
  RegisterComponent,
  ForgotComponent,
  LogoutComponent
} from './pages';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { sessionEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { sessionReducer } from './store/reducers';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { MaterialModule } from '../material.module';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    LogoutComponent,
    PasswordRecoveryComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    PasswordRecoveryComponent,
    CommonModule,
    MaterialModule,
    EffectsModule.forFeature(sessionEffects),
    StoreModule.forFeature('session', sessionReducer)
  ],
  exports: [
    ForgotComponent,
    LoginComponent,
    PasswordRecoveryComponent,
  ],
  providers: [
    ...sessionEffects,
    AuthGuardService,
  ]
})
export class SessionModule {}
