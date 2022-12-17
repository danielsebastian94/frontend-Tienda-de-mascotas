import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { Cliente } from '../models/cliente';
import { ResponseCliente } from '../models/ResponseCliente';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private UrlClient:string;
  httpHeader:HttpHeaders

  constructor(private http: HttpClient, private router:Router) {
    this.UrlClient="http://localhost:8080/cliente/";
    this.httpHeader=new HttpHeaders({'Content-Type':'application/json'});
   }

   getCliente(id:string, httpHeader:HttpHeaders):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.UrlClient+"findOne"}/${id}`, {headers:httpHeader});
   }

   getClientes(httpHeader:HttpHeaders):Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.UrlClient+"listar",{headers:httpHeader}).pipe(
      tap(response=>{
         console.log("TAB 1");
         let clientes=response as Cliente[];
         clientes.forEach(t=>{
            // console.log(t);
         })
      }),
      map(response=>{
         let clientes=response as Cliente[];
         return clientes.map(
            cliente=>{
               cliente.nombre=cliente.nombre.toLowerCase();
               // cliente.createAt=formatDate(cliente.createAt,'dd/MM/yy','en-US');
               cliente.createAt=formatDate(cliente.createAt,'fullDate','es');
               return cliente;
            }
         );
      }),
      tap(response=>{
         console.log("TAB 2");
         response.forEach(t=>{
            // console.log(t);
         })
      })
    );
   }

   createCliente(cliente:Cliente,httpHeader:HttpHeaders):Observable<ResponseCliente>{
      return this.http.post<ResponseCliente>(this.UrlClient+"save", cliente, {headers:httpHeader}).pipe(
         catchError(e=>{
            console.log(e);
            this.router.navigate(['/clientes']);
            Swal.fire("Error al crear un cliente",""+e.error.mensaje,'error');
            return throwError(e);
         })
      );
   }

   updateCliente(cliente:Cliente,httpHeader:HttpHeaders):Observable<ResponseCliente>{
      return this.http.put<ResponseCliente>(`${this.UrlClient+"save"}/${cliente.id}`, cliente, {headers:httpHeader}).pipe(
         catchError(e=>{
            console.log(e);
            let error=e as ResponseCliente;
            console.log("ERROR UPDATE");
            console.log(error);
            this.router.navigate(['/clientes']);
            Swal.fire("Error al editar un cliente",""+e.error.errors,'error');
            return throwError(e);
         })
      );;
   }

   delete(id:number,httpHeader:HttpHeaders):Observable<ResponseCliente>{
      return this.http.delete<ResponseCliente>(`${this.UrlClient+"delete"}/${id}`, {headers:httpHeader});
   }
}
