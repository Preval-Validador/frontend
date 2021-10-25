import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOpcionComponent } from './components/card-opcion/card-opcion.component';
import { PrimengModule } from '../primeng/primeng.module';
import { TablaAccionesComponent } from './components/tabla-acciones/tabla-acciones.component';

@NgModule({
  declarations: [CardOpcionComponent, TablaAccionesComponent],
  imports: [CommonModule, PrimengModule],
  exports: [CardOpcionComponent, TablaAccionesComponent],
})
export class SharedModule {}
