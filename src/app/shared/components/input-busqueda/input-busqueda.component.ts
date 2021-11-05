import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-busqueda',
  templateUrl: './input-busqueda.component.html',
  styleUrls: ['./input-busqueda.component.scss'],
})
export class InputBusquedaComponent implements OnInit {
  busqueda: FormControl = new FormControl('', Validators.required, []);
  constructor() {}

  ngOnInit(): void {}

  get(){
    return this.busqueda.invalid
   }
}
