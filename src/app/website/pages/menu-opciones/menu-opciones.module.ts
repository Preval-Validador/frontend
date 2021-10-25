import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuOpcionesRoutingModule } from './menu-opciones-routing.module';
import { MenuOpcionesComponent } from './components/menu-opciones/menu-opciones.component';


@NgModule({
  declarations: [
    MenuOpcionesComponent
  ],
  imports: [
    CommonModule,
    MenuOpcionesRoutingModule,
    SharedModule
  ]
})
export class MenuOpcionesModule { }
