import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioSeguridadService } from 'src/app/register/usuarioService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router,private usuarioService: UsuarioSeguridadService) { }

  estadoUsuario?:boolean;

  @Output() menuToggle= new EventEmitter<void>();

  ngOnInit(){
    this.usuarioService.seguridadCambio.subscribe(status=>{
      this.estadoUsuario=status;
    });
  }

  onMenuToggle(){
    this.menuToggle.emit();
  }

  redirigirAHome(): void {
    this.router.navigate(['/']);

  }

  redirigirAPerfil(){
    this.router.navigate(['/perfil']);
  }

  redirigirALogin(): void {
    this.router.navigate(['/login']);

  }

  redirigirARegister(): void {
    this.router.navigate(['/register']);

  }


}
