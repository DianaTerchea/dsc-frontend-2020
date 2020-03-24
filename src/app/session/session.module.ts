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

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    LogoutComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    EffectsModule.forFeature(sessionEffects),
    StoreModule.forFeature('session', sessionReducer)
  ],
  exports: [
    ForgotComponent,
    LoginComponent
  ],
  providers: [
    ...sessionEffects
  ]
})
export class SessionModule {

}
