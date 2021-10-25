import { TablaInterface } from './../../../utils/interfaces/tabla.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-acciones',
  templateUrl: './tabla-acciones.component.html',
  styleUrls: ['./tabla-acciones.component.scss'],
})
export class TablaAccionesComponent implements OnInit {
  data = [];
  cols: TablaInterface[] = [
    {
      header: 'cabecera',
      field: 'campo'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
