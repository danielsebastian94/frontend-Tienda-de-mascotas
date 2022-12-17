import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador-hijo',
  templateUrl: './contador-hijo.component.html',
  styleUrls: ['./contador-hijo.component.css']
})
export class ContadorHijoComponent {
  @Input() contador!:number;
  @Output() cambioContador= new EventEmitter<number>();

  constructor(){}

  multiplicar(){
    this.contador=this.contador *2;
    this.cambioContador.emit(this.contador);
  }

  dividir(){
    this.contador=this.contador/4;
    this.cambioContador.emit(this.contador);
  }

  resetearnew(contadorNew:number){
    this.contador=contadorNew;
    this.cambioContador.emit(this.contador);
  }
}
