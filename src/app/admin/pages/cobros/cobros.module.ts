import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CobrosRoutingModule } from './cobros-routing.module';
import { CobroComponent } from './components/cobro/cobro.component';


@NgModule({
  declarations: [
    CobroComponent
  ],
  imports: [
    CommonModule,
    CobrosRoutingModule,
    SharedModule
  ]
})
export class CobrosModule { }
