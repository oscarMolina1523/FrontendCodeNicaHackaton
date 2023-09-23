import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioSeguridadService } from 'src/app/register/usuarioService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private usuarioService: UsuarioSeguridadService) { }

  guardarUsuario(form: NgForm) {
    console.log(form);
    this.usuarioService.registrarUsuario({
      IdUsuario:'' ,
      NombreUsuario: form.value.nombre,
      ApellidoUsuario: form.value.apellidos,
      UserName: form.value.username,
      Password: form.value.password,
      EmailUsuario: form.value.email,
    });
  }

}
