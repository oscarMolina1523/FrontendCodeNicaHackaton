import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosComponent } from '../all-cursos/cursos.model';

@Component({
  selector: 'app-specific-curso',
  templateUrl: './specific-curso.component.html',
  styleUrls: ['./specific-curso.component.css']
})
export class SpecificCursoComponent implements OnInit {
  panelOpenState = false;
  touchedOpenState = false;

  sub:boolean=true;
  curso!:CursosComponent;
  video?:string = '';
  constructor(private route: ActivatedRoute, private readonly router: Router, private readonly cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    // console.log("router data: ", this.router.getCurrentNavigation()?.extras.state);
    // this.route.paramMap.pipe(map(() => console.log("state", window.history.state)));
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.curso={nombreCurso:params['nombreCurso'],
      descripcionCurso:params['descripcionCurso'],
      instructor:params['instructor'],
      modulosCurso:JSON.parse(params['modulosCurso']),
      modulosComentario :params['modulosComentario'],
      cursoIncripcion:params['cursoIncripcion'],
      imagenCurso:params['imagenCurso']}

      console.log(this.curso);

      // @ts-ignore
      this.video=this.curso.modulosCurso.$values[0].clasesModulo.$values[0].urlVideo;
      this.cdRef.detectChanges();
      console.log(this.video);
    });

  }

  cambiar(){
    this.sub=false;
  }
}
