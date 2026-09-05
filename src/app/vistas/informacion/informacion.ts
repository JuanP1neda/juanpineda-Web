import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-informacion',
  imports: [RouterLink],
  templateUrl: './informacion.html',
  styleUrl: './informacion.css',
})
export class Informacion {

  mostrarWeb1 = false;
  botonMostrarWeb1(){
    this.mostrarWeb1 = !this.mostrarWeb1;
  }

   mostrarWeb2 = false;
  botonMostrarWeb2(){
    this.mostrarWeb2 = !this.mostrarWeb2;
  }

  mostrarWeb3 = false;
  botonMostrarWeb3(){
    this.mostrarWeb3 = !this.mostrarWeb3;
  }

  mostrarWeb4 = false;
  botonMostrarWeb4(){
    this.mostrarWeb4 = !this.mostrarWeb4;
  }

  mostrarWeb5 = false;
  botonMostrarWeb5(){
    this.mostrarWeb5 = !this.mostrarWeb5;
  }
}
