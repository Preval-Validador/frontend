import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cooperativas',
    loadChildren: () => import('./pages/cooperativas/cooperativas.module').then(m => m.CooperativasModule)
  },
  {
    path: 'cobros',
    loadChildren: () => import('./pages/cobros/cobros.module').then(m => m.CobrosModule)
  },
  {
    path: '',
    redirectTo: 'cooperativas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
