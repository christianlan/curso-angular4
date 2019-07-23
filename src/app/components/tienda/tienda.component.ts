import { Component } from '@angular/core';

@Component({
	selector: 'tienda',
	templateUrl: './tienda.component.html',
	styleUrls: ['./tienda.component.css']
})

export class TiendaComponent {
	public title = 'Curso de Angular 4 avanzado';
	public nParque: string = 'hola';
	public objetoParque;

	mostrarNombre() {
		console.log(this.nParque);
	}
	verDatosParque(event) {
		this.objetoParque = event;
	}
}