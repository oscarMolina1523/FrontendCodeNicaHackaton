import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioSeguridadService } from 'src/app/register/usuarioService.service';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.css']
})
export class HeaderListComponent implements OnInit{
  estadoUsuario?:boolean;

  @Output() menuToggle = new EventEmitter<void>();

  constructor(private router: Router,private usuarioService: UsuarioSeguridadService) { }

  ngOnInit(){
    this.usuarioService.seguridadCambio.subscribe(status=>{
      this.estadoUsuario=status;
    });
  }

  onCerrar() {
    this.menuToggle.emit();
  }

}
