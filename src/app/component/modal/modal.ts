import { Component, ElementRef, input, viewChild, effect, inject, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal',
  imports: [ReactiveFormsModule, RouterLink],
  standalone: true,
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {
  isOpen = input<boolean>(false);
  dialogRef = viewChild<ElementRef<HTMLDialogElement>>('dialogo');

  onClose = output<void>();

  constructor() {
    
    effect(() => {
      const dialog = this.dialogRef()?.nativeElement;
      if (!dialog) return;

      if (this.isOpen()) {
        dialog.showModal(); 
      } else {
        dialog.close();
      }
    });
  }

  //Formularios
  private fb = inject(FormBuilder);
  mensaje = '';

  cotizarWeb = this.fb.group({
    nombre: ['', [Validators.required]],
    tipoPagina: ['', [Validators.required]],
    tieneLogo: ['', [Validators.required]],
    brevementeProyecto: ['', [Validators.required, Validators.maxLength(300)]]

  });
logica(){
    const {nombre, tipoPagina, tieneLogo, brevementeProyecto} = this.cotizarWeb.value;

    this.mensaje = `
      ¡Hola Juan José! Quisiera cotizar una pagina web.

      📌Nombre/Negocio: ${nombre}
      🌐Tipo de pagina: ${tipoPagina}
      🎨Materiales(Logos/Fotos): ${tieneLogo}
      📝Detalles del Proyecto: ${brevementeProyecto}
    `;

    const numeroTelefono = '573233857114';
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(this.mensaje)}`

    window.open(url, '_blank');

 }

 cerrarModal(){
  const dialog = this.dialogRef()?.nativeElement;
  
  if (dialog) {
    dialog.close();
  }
  this.onClose.emit();
 }

 limpiar(){
    this.cotizarWeb.reset();
 }
}