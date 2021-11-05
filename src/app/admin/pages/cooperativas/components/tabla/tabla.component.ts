import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  columnas = [
    {header: 'Institucion', field: 'institucion'},
    {header: 'Ubicacion', field: 'ubicacion'},
    {header: 'Fechas', field: 'fechas'},
    {header: 'Usuarios', field: 'usuarios'},
    {header: 'Habilitado', field: 'habilitado'},
    {header: 'Estado', field: 'estado'},
    {header: 'Acciones', field: 'acciones'},
  ]
  customers = [
    {
      name: 'nombre',
      company: 'Cooperativa',
      date: 'dia',
      status: 'estado',
      representative: {
        name: 'Cooperativa'
      },
      country: {
        name: 'ciudad'
      }
    },
    {
      name: 'nombre1',
      company: 'Cooperativa1',
      date: 'dia1',
      status: 'estado1',
      representative: {
        name: 'Cooperativa1'
      },
      country: {
        name: 'ciudad1'
      }
    }
  ];
  constructor() {}

  ngOnInit(): void {}

  calculateCustomerTotal(name: string) {
    let total = 0;

    if (this.customers) {
        for (let customer of this.customers) {
            if (customer.representative.name === name) {
                total++;
            }
        }
    }

    return total;
}
}
