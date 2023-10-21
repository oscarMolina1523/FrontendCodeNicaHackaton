import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CursosComponent } from './all-cursos/cursos.model';
import { Cursos2Component } from './all-cursos/cursos2.model';

@Injectable({
  'providedIn': 'root'
})
export class CursosService {

  baseUrl = environment.baseUrl;
  private cursos!: Cursos2Component;

  constructor(private http: HttpClient) { }

  obtenerCursos(): Observable<CursosComponent> {
    return this.http.get<CursosComponent>(this.baseUrl + 'cursos');
  }

  crearCurso(cursoRegister: Cursos2Component) {
    this.http.post<Cursos2Component>(this.baseUrl + 'crearCurso', cursoRegister).subscribe((response) => {
      this.cursos = {
        nombreCurso: response.nombreCurso,
        descripcionCurso: response.descripcionCurso,
        instructor: response.instructor,
        modulosCurso: response.modulosCurso,
        modulosComentario: response.modulosComentario,
        cursoIncripcion: response.cursoIncripcion,
        imagenCurso:response.imagenCurso,
      };

      console.log(this.cursos.nombreCurso);
    },(error) => {
      console.error('Error al hacer la solicitud POST:', error); // Verifica si hay errores durante la solicitud
    });
  };

}
