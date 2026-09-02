import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaFormulario } from './prueba-formulario';

describe('PruebaFormulario', () => {
  let component: PruebaFormulario;
  let fixture: ComponentFixture<PruebaFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaFormulario],
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaFormulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
