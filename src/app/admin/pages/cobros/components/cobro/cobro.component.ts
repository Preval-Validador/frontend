import { TablaInterface } from './../../../../../utils/interfaces/tabla.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cobro',
  templateUrl: './cobro.component.html',
  styleUrls: ['./cobro.component.scss']
})
export class CobroComponent implements OnInit {

  cabeceraCobro:TablaInterface[] = [
    {
      header: 'Fecha',
      field: 'fechas'
    },
    {
      header: 'Validaciones',
      field: 'validaciones'
    },
    {
      header: 'Total',
      field: 'total'
    },
    {
      header: 'Habilitado',
      field: 'id'
    },
    {
      header: 'Estado',
      field: 'id'
    },
    {
      header: 'Acciones',
      field: 'id',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
