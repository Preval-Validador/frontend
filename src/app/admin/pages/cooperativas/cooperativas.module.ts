import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CooperativasRoutingModule } from './cooperativas-routing.module';
import { CooperativaComponent } from './components/cooperativa/cooperativa.component';


@NgModule({
  declarations: [
    CooperativaComponent
  ],
  imports: [
    CommonModule,
    CooperativasRoutingModule
  ]
})
export class CooperativasModule { }
