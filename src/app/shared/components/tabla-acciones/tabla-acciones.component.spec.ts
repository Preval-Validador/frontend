import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAccionesComponent } from './tabla-acciones.component';

describe('TablaAccionesComponent', () => {
  let component: TablaAccionesComponent;
  let fixture: ComponentFixture<TablaAccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
