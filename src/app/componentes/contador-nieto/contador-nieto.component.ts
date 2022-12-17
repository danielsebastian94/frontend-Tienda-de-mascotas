import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador-nieto',
  templateUrl: './contador-nieto.component.html',
  styleUrls: ['./contador-nieto.component.css']
})
export class ContadorNietoComponent {
  @Input() contador!:number;
  @Output() cambioContador=new EventEmitter<number>();

  resetear(){
    this.contador=0;
    this.cambioContador.emit(this.contador);
  }
}
