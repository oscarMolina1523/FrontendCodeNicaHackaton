import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsuarioSeguridadService } from 'src/app/register/usuarioService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email?: string;
  password?: string;


  constructor(private usuarioService: UsuarioSeguridadService) { }

  loginUsuario(form: NgForm) {
    this.usuarioService.login({
      emailLogin: form.value.email,
      passwordLogin: form.value.password
    });
  }
}
