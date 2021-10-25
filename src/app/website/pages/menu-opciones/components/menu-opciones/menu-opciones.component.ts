import { OPCIONES_PRINCIPALES } from './../../../../../data/opciones-menu';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.scss'],
})
export class MenuOpcionesComponent implements OnInit {
  listaOpciones = OPCIONES_PRINCIPALES;

  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  opcionSeleccionada(ruta: string) {
    console.log(ruta);

    if (ruta) {
      console.log('selecciones =>', ruta);
      this._router.navigate([ruta]);
    }
  }
}
