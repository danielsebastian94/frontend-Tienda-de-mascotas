import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HashRolesGuard implements CanActivate {
  auth:boolean;
  rol:string;
  roles:string[];

  constructor(){
    this.auth=false;
    this.rol="";
    this.roles=[]
  }
  canActivate(
    route: ActivatedRouteSnapshot) {
      this.rol=sessionStorage.getItem('roles') ?? '';
      this.roles=this.rol.split(',');
      if(this.roles.includes(route.data['role'])){
        this.auth=true
      }else{
        this.auth=false
        Swal.fire("Error","No tienes permiso para acceder a este sitio","warning");
      }
      return this.auth;
  }
  
}
