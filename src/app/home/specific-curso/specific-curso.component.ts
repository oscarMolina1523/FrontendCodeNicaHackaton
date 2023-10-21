import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosComponent } from '../all-cursos/cursos.model';

@Component({
  selector: 'app-specific-curso',
  templateUrl: './specific-curso.component.html',
  styleUrls: ['./specific-curso.component.css']
})
export class SpecificCursoComponent implements OnInit {
  panelOpenState = false;
  touchedOpenState = false;

  curso:CursosComponent[]=[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

      this.curso=[{nombreCurso:params['nombreCurso'],
      descripcionCurso:params['descripcionCurso'],
      instructor:params['instructor'],
      modulosCurso:params['modulosCurso'],
      modulosComentario:params['modulosComentario'],
      cursoIncripcion:params['cursoIncripcion'],
      imagenCurso:params['imagenCurso']
      }]
    });

    console.log(this.curso);
  }
}
