import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsuarioSeguridadService } from 'src/app/register/usuarioService.service'; // Supongamos que tienes un servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: UsuarioSeguridadService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (this.authService.onSesion()) {
      return true;
    } else {
      // Redirige al usuario a la página de login si no está autenticado
      return this.router.createUrlTree(['/login']);
    }
  }

}
