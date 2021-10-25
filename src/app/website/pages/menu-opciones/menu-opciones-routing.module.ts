import { MenuOpcionesComponent } from './components/menu-opciones/menu-opciones.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MenuOpcionesComponent,
  },
  {
    path: 'balance',
    loadChildren: () =>
      import('../validacion/validacion.module').then(
        (m) => m.ValidacionModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuOpcionesRoutingModule {}
