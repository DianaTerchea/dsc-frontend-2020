import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {
  LoginComponent,
  RegisterComponent,
  ForgotComponent,
  LogoutComponent
} from './pages';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    LogoutComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule],
  exports: [LoginComponent
  ]
})
export class SessionModule {

}
