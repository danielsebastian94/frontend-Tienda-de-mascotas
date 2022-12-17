import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin } from 'src/app/models/ILogin';
import { IResponseLogin } from 'src/app/models/IResponseLogin';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private UrlLogin="http://localhost:8080/auth/login"
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient, private router: Router) { }

  postLogin(usuario:ILogin):Observable<any>{
    return this.http.post<IResponseLogin>(this.UrlLogin, usuario, {headers:this.httpHeaders}).pipe(
      catchError(e=>{
        this.router.navigate(['/login']);
        Swal.fire("Error", "Usuario o contraseña invalida", 'error');
        return throwError(e);
      })
    );
  }

}
