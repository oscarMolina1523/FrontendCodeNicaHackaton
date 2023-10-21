import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosComponent } from '../all-cursos/cursos.model';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-base-carusel',
  templateUrl: './base-carusel.component.html',
  styleUrls: ['./base-carusel.component.css']
})
export class BaseCaruselComponent {
  @Input() images: CursosComponent[] = [];
  currentIndex = 0;

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  redirigirACursoEspecifico(imagen: CursosComponent): void {
    this.router.navigate(['/selection-curse'], {
      relativeTo: this.route,
      queryParams: {
        nombreCurso: imagen.nombreCurso,
        descripcionCurso: imagen.descripcionCurso,
        instructor: imagen.instructor,
        modulosCurso: imagen.modulosCurso,
        modulosComentario: imagen.modulosComentario,
        cursoIncripcion: imagen.cursoIncripcion,
        imagenCurso: imagen.imagenCurso,
      }
    });
  }

  navegar(direccion: 'izquierda' | 'derecha'): void {
    if (direccion === 'izquierda' && this.currentIndex > 0) {
      this.currentIndex -= 1;
    } else if (direccion === 'derecha' && this.currentIndex < this.images.length - 5) {
      this.currentIndex += 1;
    }
  }

  isDisabled(direccion: 'izquierda' | 'derecha'): boolean {
    if (direccion === 'izquierda') {
      return this.currentIndex === 0;
    } else {
      return this.currentIndex === this.images.length - 5;
    }
  }

}
