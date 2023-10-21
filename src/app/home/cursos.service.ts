import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CursosComponent } from './all-cursos/cursos.model';

@Injectable({
  'providedIn': 'root'
})
export class CursosService {

  baseUrl = environment.baseUrl;
  private cursos!: CursosComponent;

  constructor(private http: HttpClient) { }

  obtenerCursos(): Observable<CursosComponent> {
    return this.http.get<CursosComponent>(this.baseUrl + 'cursos');
  }

  crearCurso(cursoRegister: CursosComponent) {
    this.http.post<CursosComponent>(this.baseUrl + 'crearCurso', cursoRegister).subscribe((response) => {
      this.cursos = {
        nombreCurso: 'azul',
        descripcionCurso: 'moreno',
        instructor: 'negro',
        modulosCurso: [{nombreModulo:'banano',descripcionModulo:'rojo', clasesModulo:[{nombreClase:'nada',descripcion:'cacao',urlVideo:'azul'}]}],
        modulosComentario: [{nombreUsuario:'', textoUsuario:''}],
        cursoIncripcion: [{inscripcionUsuario:''}],
        imagenCurso: {imagenUrl:''},
      };

      console.log(this.cursos.nombreCurso);
    },(error) => {
      console.error('Error al hacer la solicitud POST:', error); // Verifica si hay errores durante la solicitud
    });
  };

}
