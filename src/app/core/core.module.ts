import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent } from './components';
import { WelcomePageComponent } from './pages';
import { MaterialModule } from '../material.module'

@NgModule({
  imports: [
    MaterialModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
