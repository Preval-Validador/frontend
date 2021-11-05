import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionOpcionesComponent } from './seleccion-opciones.component';

describe('SeleccionOpcionesComponent', () => {
  let component: SeleccionOpcionesComponent;
  let fixture: ComponentFixture<SeleccionOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionOpcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
