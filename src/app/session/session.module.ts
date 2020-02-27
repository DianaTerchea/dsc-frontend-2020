import { NgModule } from '@angular/core';
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
    LogoutComponent
  ],
  imports: [],
})
export class SessionModule {

}
