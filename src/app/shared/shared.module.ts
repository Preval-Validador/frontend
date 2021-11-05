import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOpcionComponent } from './components/card-opcion/card-opcion.component';
import { PrimengModule } from '../primeng/primeng.module';
import { NavComponent } from './components/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputBusquedaComponent } from './components/input-busqueda/input-busqueda.component';
import { SeleccionOpcionesComponent } from './components/seleccion-opciones/seleccion-opciones.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CardOpcionComponent,
    NavComponent,
    InputBusquedaComponent,
    SeleccionOpcionesComponent,
  ],
  imports: [CommonModule, PrimengModule, ReactiveFormsModule, MaterialModule],
  exports: [
    CardOpcionComponent,
    NavComponent,
    InputBusquedaComponent,
    SeleccionOpcionesComponent,
  ],
})
export class SharedModule {}
