import { PrimengModule } from './../../../primeng/primeng.module';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CooperativasRoutingModule } from './cooperativas-routing.module';
import { CooperativaComponent } from './components/cooperativa/cooperativa.component';
import { TablaComponent } from './components/tabla/tabla.component';


@NgModule({
  declarations: [
    CooperativaComponent,
    TablaComponent,
  ],
  imports: [
    CommonModule,
    CooperativasRoutingModule,
    SharedModule,
    PrimengModule,
  ]
})
export class CooperativasModule { }
