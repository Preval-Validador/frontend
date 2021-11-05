import { PrimengModule } from './../../../primeng/primeng.module';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { TablaComponent } from './components/tabla/tabla.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    TablaComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
    PrimengModule,
  ]
})
export class UsuariosModule { }
