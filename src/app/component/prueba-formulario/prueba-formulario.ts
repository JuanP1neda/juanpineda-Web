import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './prueba-formulario.html',
  styleUrl: './prueba-formulario.css',
})
export class PruebaFormulario {
  private fb = inject(FormBuilder);

  mensaje1: string = ' ';
  mensaje2: string = ' ';
  mensaje3: string = ' ';
  mensaje4: string = ' ';

  simuladorInversiones = this.fb.group({
    inversion: [0, [Validators.required, Validators.min(50000)]],
    plazo: [0, [Validators.required, Validators.min(3), Validators.max(24)]],
    nivelRiesgo: ['Bajo',[Validators.required]]
  })

  logica(){
    const{inversion, plazo, nivelRiesgo} = this.simuladorInversiones.value;

    let ganancias = 0; 
    let tasa = 0; 
    let bono = 0;


    if(nivelRiesgo === 'Bajo'){
      tasa = 0.015;
    }else{
      tasa = 0.035;
    }

    ganancias = Number(inversion) * Number(plazo) * tasa;

    this.mensaje2 = ('La ganancia estimada: $' + ganancias.toLocaleString('es-CO'))

    const sumaBase = Number(inversion) + ganancias;
    if(Number(plazo) >= 12){
      bono = sumaBase * 0.02;
    }

    const gananciaTotal = sumaBase + bono

    this.mensaje1 = ('El monto inicial es de: $' + Number(inversion).toLocaleString('es-CO'))

    this.mensaje3 = ('El bono de permanecia es de: $' + bono.toLocaleString('es-CO'))

    this.mensaje4 = ('Ganancia total: $' + gananciaTotal.toLocaleString('es-CO'))
  }
}
