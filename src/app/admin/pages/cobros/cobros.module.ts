import { PrimengModule } from './../../../primeng/primeng.module';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CobrosRoutingModule } from './cobros-routing.module';
import { CobroComponent } from './components/cobro/cobro.component';
import { TablaComponent } from './components/tabla/tabla.component';


@NgModule({
  declarations: [
    CobroComponent,
    TablaComponent,
  ],
  imports: [
    CommonModule,
    CobrosRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class CobrosModule { }
