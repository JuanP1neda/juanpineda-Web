import { Component, effect, ElementRef, inject, input, output, viewChild } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal2',
  imports: [ReactiveFormsModule, RouterLink],
  standalone: true,
  templateUrl: './modal2.html',
  styleUrl: './modal2.css',
})
export class Modal2 {

  isOpen = input<boolean>(false);
  dialogRef = viewChild<ElementRef<HTMLDialogElement>>('dialogo2');

  onClose = output<void>();

  constructor(){
    effect(() => {
      const dialog = this.dialogRef()?.nativeElement;
      if (!dialog) return;

      if (this.isOpen()){
        dialog.showModal();
      }else
        dialog.close();
    });
  }

cerrarModal(){
  const dialog = this.dialogRef()?.nativeElement;
  
  if(dialog){
    dialog.close();
  }
  this.onClose.emit();
}

//Formulario
private fb = inject(FormBuilder);
mensaje: string = ''

Cotizar = this.fb.group({
  nombre: ['', [Validators.required]],
  sistemaOperativo: ['', [Validators.required]],
  problema: ['', [Validators.required]],
  descripcion: ['', [Validators.required]]
});

logica2(){
  const {nombre, sistemaOperativo, problema, descripcion} = this.Cotizar.value;

  this.mensaje = `
    ¡Hola Juan José! Quisiera cotizar un servicio técnico.

      📌Nombre/Negocio: ${nombre}
      🪟🐧Sistema Operativo del pc: ${sistemaOperativo}
      🔧Problema del Equipo: ${problema}
      📝Descripción: ${descripcion}
  `
  const numeroTelefono = '573233857114'
  const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(this.mensaje)}`;

  window.open(url, 'blank')
}

limpiar2(){
  this.Cotizar.reset();
}

}