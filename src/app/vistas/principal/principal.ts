import { Component, signal } from '@angular/core';
import { Modal } from '../../component/modal/modal';
import { Modal2 } from '../../component/modal2/modal2';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [Modal, Modal2, RouterLink],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {

  mostrarModal = signal<boolean>(false);
  
  abrirModal() {
    this.mostrarModal.set(true);
  }
  cerrarModal() {
    this.mostrarModal.set(false)
  }

  mostrarModal2 = signal<boolean>(false);

  abrirModal2() {
    this.mostrarModal2.set(true);
  }
  cerrarModal2() {
    this.mostrarModal2.set(false);
  }
}
