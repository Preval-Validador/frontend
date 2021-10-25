import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-opcion',
  templateUrl: './card-opcion.component.html',
  styleUrls: ['./card-opcion.component.scss'],
})
export class CardOpcionComponent implements OnInit {
  @Input() titulo: string | null = null;
  @Input() image: string | null = null;
  @Input() ruta: string | null = null;
  @Output() opcionSeleccionada = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  enviarOpcion() {
    console.log('dio click', this.ruta);
    if (this.ruta) {
      this.opcionSeleccionada.emit(this.ruta);
    }
  }
}
