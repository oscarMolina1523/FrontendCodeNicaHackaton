import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UsuarioComponent } from './usuario.model';
import { UsuarioLoginComponent } from './usuarioLogin.model';

@Injectable({
  'providedIn': 'root'
})
export class UsuarioSeguridadService {

  seguridadCambio = new Subject<boolean>();
  private usuarioAutenticado: boolean = false; // Variable para controlar la autenticación

  constructor(private router: Router) {
  }

  users: UsuarioComponent[] = [{
    IdUsuario: '1',
    NombreUsuario: 'Oscar',
    ApellidoUsuario: 'Molina',
    UserName: 'escanorMolina',
    Password: '123456',
    EmailUsuario: 'oscarmolina20032021@gmail.com',

  },
  {
    IdUsuario: '2',
    NombreUsuario: 'Luis',
    ApellidoUsuario: 'Alberto',
    UserName: 'inbañablePlus',
    Password: '123456',
    EmailUsuario: 'luisLadron15@gmail.com',

  }];


  login(usrLogin: UsuarioLoginComponent) {
    let foundUser = this.users.find(user => user.EmailUsuario === usrLogin.emailLogin
      && user.Password === usrLogin.passwordLogin);
    if (foundUser) {
      this.usuarioAutenticado = true; // El usuario ha iniciado sesión
      this.router.navigate(['/']);
      this.seguridadCambio.next(true);
    } else {
      this.usuarioAutenticado = false; // El usuario no ha iniciado sesión
      this.router.navigate(['/login']);
    }
  }

  registrarUsuario(usrRegister: UsuarioComponent) {

    const nuevoId = (this.users.length + 1).toString();
    usrRegister.IdUsuario = nuevoId;
    this.users.push(usrRegister);
    this.usuarioAutenticado = true;
    this.seguridadCambio.next(true);
    this.router.navigate(['/']);
  };

  onSesion() {
    return this.usuarioAutenticado;
  }
}




