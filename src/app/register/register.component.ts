import { Component, OnInit } from '@angular/core';
import { Storage, getDownloadURL, listAll, ref } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { UsuarioSeguridadService } from 'src/app/register/usuarioService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usuarioService: UsuarioSeguridadService,private storage:Storage) { }

  ngOnInit(): void {
    this.getLogo();
  }

  logo?:string;

  getLogo() {
    const imagesRef = ref(this.storage, 'logo');
    listAll(imagesRef).then(async response => {
      console.log(response);
      this.logo;
      if(response.items.length>0){
        const item = response.items[0];
        const url = await getDownloadURL(item);
        this.logo=url;
      }
    }).catch(error => console.log(error));
  }

  guardarUsuario(form: NgForm) {
    this.usuarioService.registrarUsuario({
      Nombre: form.value.nombre,
      Apellido: form.value.apellidos,
      UserName: form.value.userName,
      Contraseña: form.value.password,
      Email: form.value.email,
      Rol:'userComun'
    });
  }

}
