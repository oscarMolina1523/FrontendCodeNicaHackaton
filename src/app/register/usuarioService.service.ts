import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { UsuarioComponent } from './usuario.model';
import { UsuarioLoginComponent } from './usuarioLogin.model';

@Injectable({
  'providedIn': 'root'
})
export class UsuarioSeguridadService {

  baseUrl = environment.baseUrl;
  seguridadCambio = new Subject<boolean>();
  private usuario!: UsuarioComponent;
  private usuarioAutenticado: boolean = false; // Variable para controlar la autenticación

  constructor(private router: Router, private http: HttpClient) {
  }

  login(usrLogin: UsuarioLoginComponent) {
    this.http.get<any>(this.baseUrl + 'usuario').subscribe((response) => {
      if (response["$values"] && response["$values"].length > 0) {
        const usuarios = response["$values"];
        let usuarioEncontrado = null;
        for (let i = 0; i < usuarios.length; i++) {
          if (
            usuarios[i].email === usrLogin.emailLogin &&
            usuarios[i].contraseña === usrLogin.passwordLogin
          ) {
            usuarioEncontrado = usuarios[i];
            break;
          }
        }
        if (usuarioEncontrado) {
          this.usuarioAutenticado = true;
          this.seguridadCambio.next(true);
          this.router.navigate(['/']);
        } else {
          console.log(usrLogin.emailLogin);
          console.log(usrLogin.passwordLogin);
          this.usuarioAutenticado = false;
          this.router.navigate(['/login']);
        }
      } else {
        console.log('La lista de usuarios está vacía');
      }
    });
  }

  registrarUsuario(usrRegister: UsuarioComponent) {

    this.http.post<UsuarioComponent>(this.baseUrl + 'usuario', usrRegister).subscribe((response) => {
      this.usuario = {
        Nombre: response.Nombre,
        Apellido: response.Apellido,
        UserName: response.UserName,
        Contraseña: '',
        Email: response.Email,
        Rol: 'userComun'
      };
      this.usuarioAutenticado = true;
      this.seguridadCambio.next(true);
      this.router.navigate(['/']);
    });
  };

  onSesion() {
    return this.usuarioAutenticado;
  }
}




