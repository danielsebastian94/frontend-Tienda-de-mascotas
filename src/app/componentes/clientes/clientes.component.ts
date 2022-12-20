import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit, AfterViewInit {
  cliente1: Cliente;
  cliente2: Cliente;
  listclientes: Cliente[];

  //Table Angular Material
  displayedColumns: string[];
  dataSource: MatTableDataSource<Cliente>;

  httpHeaders:HttpHeaders=new HttpHeaders();
  token=sessionStorage.getItem('token');


  constructor(private clienteService: ClienteService) {
    this.cliente1 = new Cliente(
      1,
      'Sebastian',
      'Jimenez',
      'sebasstiian94@gmail.com',
      '2022-12-09',
      ''
    );
    this.cliente2 = {
      id: 2,
      nombre: 'Carolina',
      apellido: 'Ceballos',
      email: 'caritoc@gmail.com',
      createAt: '2022-12-09',
      foto: '',
    };
    this.listclientes = [];

    //Table Angular Material
    this.displayedColumns = [
      'id',
      'nombre',
      'apellido',
      'email',
      'fecha',
      'acciones'
    ];

    this.dataSource = new MatTableDataSource<Cliente>([]);

    this.httpHeaders=this.httpHeaders.append('Authorization','Bearer '+this.token);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.clienteService.getClientes(this.httpHeaders).subscribe(
      (clientes) => {
        this.listclientes = clientes;
        if (this.listclientes.length > 0) {
          this.dataSource.data = this.listclientes;
        }
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(cliente: Cliente) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Estás seguro ?',
        text: 'Tu no quieres revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si Eliminar esto!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.value) {
          this.clienteService.delete(cliente.id, this.httpHeaders).subscribe((response) => {
            this.listclientes = this.listclientes.filter((cli) => cli !== cliente); //quitar del listado clientes, el objeto que se elimino para que se actualice de forma automatica.
            this.dataSource.data = this.listclientes;
            Swal.fire(
              'Cliente Eliminado!',
              `Cliente ${cliente.nombre} eliminado con éxito`,
              'success'
            );
          });
        }
      });
  }
}
