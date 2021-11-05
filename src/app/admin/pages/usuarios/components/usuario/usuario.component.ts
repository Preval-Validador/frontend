import { TablaInterface } from './../../../../../utils/interfaces/tabla.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  cabeceraUsuarios: TablaInterface[] = [
    {
      header: 'Representante institucion',
      field: 'fechas',
    },
    {
      header: 'Informacion contacto',
      field: 'validaciones',
    },
    {
      header: 'Fechas',
      field: 'total',
    },
    {
      header: 'Habilitado',
      field: 'id',
    },
    {
      header: 'Estado',
      field: 'id',
    },
    {
      header: 'Acciones',
      field: 'id',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
