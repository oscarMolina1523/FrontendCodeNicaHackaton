import { ComentariosComponent } from './comentarios.model';
import { InscripcionComponent } from './inscripcion.model';
import { ModulosComponent } from './modulos-curso.model';

export interface CursosComponent{

  nombreCurso:string;
  descripcionCurso:string;
  instructor:string;
  modulosCurso:ModulosComponent[];
  modulosComentario?:ComentariosComponent[];
  cursoIncripcion?:InscripcionComponent[];
  imagenCurso: {imagenUrl:string};
}
