import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localEs from '@angular/common/locales/es';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ContadorPadreComponent } from './componentes/contador-padre/contador-padre.component';
import { ContadorHijoComponent } from './componentes/contador-hijo/contador-hijo.component';
import { ContadorNietoComponent } from './componentes/contador-nieto/contador-nieto.component';

//servicios
import { ClienteService } from './servicios/cliente.service';
import { FormComponent } from './formularios/clientes/form/form.component';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//AngularMaterial
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { SearchProductoComponent } from './componentes/search-producto/search-producto.component';
import { LoginComponent } from './componentes/login/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

//Guardas
import { LoginGuard } from './guardas/login.guard';
import { HashRolesGuard } from './guardas/hash-roles.guard';

const routes:Routes=[
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:ContadorPadreComponent},
  {path: 'cursos', component:CursosComponent, canActivate:[LoginGuard, HashRolesGuard], data:{role:'ROLE_ADMIN'}},
  {path: 'clientes', component:ClientesComponent, canActivate:[LoginGuard,HashRolesGuard], data:{role:'ROLE_ADMIN'}},
  {path: 'clientes/form', component:FormComponent, canActivate:[LoginGuard, HashRolesGuard], data:{role:'ROLE_ADMIN'}},
  {path: 'clientes/form/:id', component:FormComponent, canActivate:[LoginGuard, HashRolesGuard], data:{role:'ROLE_ADMIN'}}
]

registerLocaleData(localEs,'es');
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CursosComponent,
    ClientesComponent,
    ContadorPadreComponent,
    ContadorHijoComponent,
    ContadorNietoComponent,
    FormComponent,
    SearchProductoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [
    ClienteService,
    {provide:LOCALE_ID, useValue:'es'},
    LoginGuard,
    HashRolesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
