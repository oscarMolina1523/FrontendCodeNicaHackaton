import { Component, OnInit } from '@angular/core';
import { Storage, getDownloadURL, listAll, ref } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';

import { UsuarioSeguridadService } from 'src/app/register/usuarioService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email?: string;
  password?: string;


  constructor(private usuarioService: UsuarioSeguridadService, private storage:Storage) { }

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

  loginUsuario(form: NgForm) {
    this.usuarioService.login({
      emailLogin: form.value.email,
      passwordLogin: form.value.password
    });
    console.log(form.value.email);
    console.log(form.value.password);
  }
}
