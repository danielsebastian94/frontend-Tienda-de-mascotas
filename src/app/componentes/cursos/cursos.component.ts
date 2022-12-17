import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  
  listaProductos:string[];
  habilitar:boolean;
  textForm:string;

  constructor(){
    this.listaProductos=['Test Unitarios', 'WebFlux', 'Redux', 'Automatización Azure'];
    this.habilitar=false;
    this.textForm="";
  }


  setHabilitar():void{
    this.habilitar= (this.habilitar==true) ? false : true;
  }

  borrarCurso(index:number){
    this.listaProductos.splice(index, 1);
  }

  mostrarTexto(){
    console.log(this.textForm);
  }

  getTexto(){
    Swal.fire("Mensaje","Texto presionado: "+this.textForm);
  }

  addTexto(){
    this.listaProductos.push(this.textForm);
  }


  // setHabilitar():void{
  //   if(this.habilitar==true){
  //     this.habilitar=false;
  //   }else{
  //     this.habilitar=true;
  //   }
  // }


}
