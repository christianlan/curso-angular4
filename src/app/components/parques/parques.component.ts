import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck } from '@angular/core';

@Component({
	selector: 'parques',
	templateUrl: './parques.component.html'
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck {
	@Input() nombre: string;
	@Input('metros2') metros: number;
	public vegetacion: string;
	public abierto: boolean;
	@Output() passDatas = new EventEmitter();

	constructor() {
		this.nombre = "parque natural para caballos";
		this.metros = 450;
		this.vegetacion = 'Alta';
		this.abierto = false;
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log(changes);
	}

	ngOnInit() {
		console.log("on init lanzado.");
	}

	ngDoCheck() {
		console.log("do check ejecutado");
	}

	emitirEvento() {
		this.passDatas.emit({
			'nombre': this.nombre,
			'vegetacion': this.vegetacion
		});
	}
}