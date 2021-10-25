import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOpcionComponent } from './card-opcion.component';

describe('CardOpcionComponent', () => {
  let component: CardOpcionComponent;
  let fixture: ComponentFixture<CardOpcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOpcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOpcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
