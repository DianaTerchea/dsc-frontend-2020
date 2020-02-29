import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent } from './components';

@NgModule({
  imports: [],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
