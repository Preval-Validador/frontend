import { TablaInterface } from './../../../../../utils/interfaces/tabla.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
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


  constructor() { }

  ngOnInit(): void {
  }

  editarFecha(){
    alert('editar la fecha')
  }

}
