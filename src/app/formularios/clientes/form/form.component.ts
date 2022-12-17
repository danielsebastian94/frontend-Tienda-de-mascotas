import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ResponseCliente } from 'src/app/models/ResponseCliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  cliente:Cliente;
  respondeCliente!:ResponseCliente;
  id!:string;

  httpHeaders:HttpHeaders=new HttpHeaders();
  token=sessionStorage.getItem('token');
  
  constructor(private clienteService : ClienteService, private router:Router, private activatedRoute: ActivatedRoute){
    this.cliente=new Cliente(0,"","","","","");
    this.httpHeaders=this.httpHeaders.append('Authorization','Bearer '+this.token);
  }
  ngOnInit(){
    this.getCliente();
  }

  create(){
    this.clienteService.createCliente(this.cliente, this.httpHeaders).subscribe(
      response => {
        this.respondeCliente=response
        console.log(this.respondeCliente);
        this.router.navigate(['/clientes']);
        Swal.fire("Nuevo Cliente", response.mensaje, 'success')
      }
    )
  }

  update(){
    this.clienteService.updateCliente(this.cliente, this.httpHeaders).subscribe(
      response => {
        this.respondeCliente=response
        console.log(this.respondeCliente);
        this.router.navigate(['/clientes']);
        Swal.fire("Cliente Actualizado", response.mensaje, 'success')
      }
    )
  }

  getCliente(){
    this.activatedRoute.params.subscribe(
      params=>{
        this.id=params['id']
        if(this.id){
          this.clienteService.getCliente(this.id, this.httpHeaders).subscribe(
            cliente=>{
              this.cliente=cliente;
              console.log(cliente);
            }
          )
        }
      }
    )
  }
}
