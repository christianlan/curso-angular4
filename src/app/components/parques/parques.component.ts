import { Component } from '@angular/core';

@Component({
	selector: 'parques',
	templateUrl: './parques.component.html'
})

export class ParquesComponent {
	public nombre: string;
	public metros: number;
	public vegetacion: string;
	public abierto: boolean;

	constructor() {
		this.nombre = "parque natural para caballos";
		this.metros = 450;
		this.vegetacion = 'Alta';
		this.abierto = false;
	}
}