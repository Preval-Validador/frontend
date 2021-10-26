import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOpcionComponent } from './components/card-opcion/card-opcion.component';
import { PrimengModule } from '../primeng/primeng.module';
import { TablaAccionesComponent } from './components/tabla-acciones/tabla-acciones.component';
import { NavComponent } from './components/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardOpcionComponent, TablaAccionesComponent, NavComponent],
  imports: [CommonModule, PrimengModule, ReactiveFormsModule],
  exports: [CardOpcionComponent, TablaAccionesComponent, NavComponent],
})
export class SharedModule {}
