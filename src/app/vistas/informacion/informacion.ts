import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-informacion',
  imports: [RouterLink],
  templateUrl: './informacion.html',
  styleUrl: './informacion.css',
})
export class Informacion {
  //Iniciar Cotizar
  numeroTelefono = '573116852026';
  mensaje = '';
  
  logica1(){
    this.mensaje = `Hola, Juan José 👋 Vengo de tu página web. 
Me interesa cotizar la Página Web para Ventas Rápidas ($150.000 COP) para mi negocio. 
¿Me podrías brindar más información sobre cómo empezamos? Mi nombre es: [Tu nombre]`

    const url = `https://wa.me/${this.numeroTelefono}?text=${encodeURIComponent(this.mensaje)}`;

    window.open(url, '_blank')

  }
  logica2(){
    this.mensaje = `Hola, Juan José 👋 Vengo de tu página web. 
Me interesa cotizar la Web Corporativa / Portafolio Profesional ($150.000 COP) para mi negocio. 
¿Me podrías brindar más información sobre cómo empezamos? Mi nombre es: [Tu nombre]`

    const url = `https://wa.me/${this.numeroTelefono}?text=${encodeURIComponent(this.mensaje)}`;

    window.open(url, '_blank')

  }
  logica3(){
    this.mensaje = `Hola, Juan José 👋 Vengo de tu página web. 
Me interesa cotizar el Catálogo Digital de Productos y Servicios ($200.000 COP) para mi negocio. 
¿Me podrías brindar más información sobre cómo empezamos? Mi nombre es: [Tu nombre]`

    const url = `https://wa.me/${this.numeroTelefono}?text=${encodeURIComponent(this.mensaje)}`;

    window.open(url, '_blank')

  }
  logica4(){
    this.mensaje = `Hola, Juan José 👋 Vengo de tu página web. 
Me interesa cotizar la Carta / Menú QR para Restaurantes con o sin internet ($120.000 COP) para mi negocio. 
¿Me podrías brindar más información sobre cómo empezamos? Mi nombre es: [Tu nombre]`

    const url = `https://wa.me/${this.numeroTelefono}?text=${encodeURIComponent(this.mensaje)}`;

    window.open(url, '_blank')

  }
  logica5(){
    this.mensaje = `Hola, Juan José 👋 Vengo de tu página web. 
Me interesa cotizar la Invitación Web Interactiva para Eventos ($40.000 COP) para mi negocio. 
¿Me podrías brindar más información sobre cómo empezamos? Mi nombre es: [Tu nombre]`

    const url = `https://wa.me/${this.numeroTelefono}?text=${encodeURIComponent(this.mensaje)}`;

    window.open(url, '_blank')

  }





  //Inicia Mostrar

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
