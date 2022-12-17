import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title:string;

  constructor(private router:Router){
    this.title="Tienda de Mascotas";
  }

  logout(){
    sessionStorage.clear();
    sessionStorage.setItem('authenticated',"false");
    this.router.navigate(['/login']);
  }
}
