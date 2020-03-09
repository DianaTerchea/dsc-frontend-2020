import { NgModule } from '@angular/core';
import {
  LoginComponent,
  RegisterComponent,
  ForgotComponent,
  LogoutComponent
} from './pages';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    LogoutComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    ForgotComponent
  ]
})
export class SessionModule {

}
