import { TablaInterface } from './../../../utils/interfaces/tabla.interface';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabla-acciones',
  templateUrl: './tabla-acciones.component.html',
  styleUrls: ['./tabla-acciones.component.scss'],
})
export class TablaAccionesComponent implements OnInit {

  inputSwitch = new FormControl(false)

  @Input()
  data = [
    {
      campo: 'hola'
    }
  ];

  @Input()
  cols: TablaInterface[] = [
    {
      header: 'cabecera',
      field: 'campo'
    },
    {
      header: 'cabecera',
      field: 'campo'
    },
    {
      header: 'cabecera',
      field: 'campo'
    },
    {
      header: 'cabecera',
      field: 'campo'
    },
    {
      header: 'cabecera',
      field: 'campo'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
