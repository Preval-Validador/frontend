import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion-opciones',
  templateUrl: './seleccion-opciones.component.html',
  styleUrls: ['./seleccion-opciones.component.scss']
})
export class SeleccionOpcionesComponent implements OnInit {
  opciones = [
    {
      id: 1
    },
    {
      id: 2
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
