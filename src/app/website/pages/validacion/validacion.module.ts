import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidacionRoutingModule } from './validacion-routing.module';
import { ValidacionComponent } from './components/validacion/validacion.component';


@NgModule({
  declarations: [
    ValidacionComponent
  ],
  imports: [
    CommonModule,
    ValidacionRoutingModule
  ]
})
export class ValidacionModule { }
