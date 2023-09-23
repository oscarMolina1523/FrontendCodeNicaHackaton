import { Injectable } from '@angular/core';
import { CursosComponent } from './all-cursos/cursos.model';
@Injectable({
  'providedIn': 'root'
})
export class CursosService {

  private cursos: CursosComponent[] = [
    {
      CursoId:'1',
      CursoTutor:'Alberto Sanchez',
      CursoName: 'Matematicas',
      CursoDescription: 'Problemas Matematicos',
      CursoUrl:'assets/imagenCursos/Matematicas.jpg',
      CursoVideoUrl:'assets/videos/lloraPues.mp4',
    },
    {
      CursoId:'2',
      CursoName: 'Lengua y Literatura',
      CursoTutor:'Dalila Vargas',
      CursoDescription: 'Lenguaje colonial',
      CursoUrl:'assets/imagenCursos/LenguaLiteratura.jpg',
      CursoVideoUrl:'',
    },
    {
      CursoId:'3',
      CursoTutor:'Mirna Sotelo',
      CursoName: 'Ingles',
      CursoDescription: 'Open English.com',
      CursoUrl:'assets/imagenCursos/ingles.jpg',
       CursoVideoUrl:'',
    },
    {
      CursoId:'4',
      CursoTutor:'Yanior Sanchez',
      CursoName: 'Computacion',
      CursoDescription: 'Programacion cuantica',
      CursoUrl:'assets/imagenCursos/computacion.jpg',
      CursoVideoUrl:'',
    },
    {
      CursoId:'5',
      CursoTutor:'Jackson Alvarado',
      CursoName: 'Diseño',
      CursoDescription: 'Uso de herramientas para creacion de contenido',
      CursoUrl:'assets/imagenCursos/Diseño.jpg',
      CursoVideoUrl:'',
    },
    {
      CursoId:'6',
      CursoTutor:'Moises Gamez',
      CursoName: 'Filosofia',
      CursoDescription: 'Desarrollo de la duda, la logica y el cerebro',
      CursoUrl:'assets/imagenCursos/filosofia.jpg',
      CursoVideoUrl:'',
    },
    {
      CursoId:'7',
      CursoTutor:'Ricardo Morales',
      CursoName: 'Geografia',
      CursoDescription: 'Conociendo nuestro planeta tierra',
      CursoUrl:'assets/imagenCursos/geografia.jpg',
      CursoVideoUrl:'assets/videos/lloraPues.mp4',
    },
    {
      CursoId:'8',
      CursoTutor:'Donatelo Sanchez',
      CursoName: 'Ciencias Naturales',
      CursoDescription: 'Somos uno con el medio ambiente',
      CursoUrl:'assets/imagenCursos/cienciasNaturales.jpg',
      CursoVideoUrl:'',
    },
    {
      CursoId:'9',
      CursoTutor:'Manuel Rodriguez',
      CursoName: 'Fisica Cuantica',
      CursoDescription: 'Universidad de Harvard',
      CursoUrl:'assets/imagenCursos/fisicaCuantica.jpg',
       CursoVideoUrl:'',
    },
    {
      CursoId:'10',
      CursoTutor:'Samuel Tragon',
      CursoName: 'Desarrollo artistica en la Musica',
      CursoDescription: 'Desarrollo de los 5 sentidos en el arte',
      CursoUrl:'assets/imagenCursos/Musica.jpg',
      CursoVideoUrl:'',
    },
    {
      CursoId:'11',
      CursoTutor:'Danny Alvarez',
      CursoName: 'Desarrollo de IA en entorno Web',
      CursoDescription: 'Aprende como funciona la tecnologia',
      CursoUrl:'assets/imagenCursos/inteligenciaArtificial.jpg',
      CursoVideoUrl:'',
    },
    {
      CursoId:'12',
      CursoTutor:'Roberto Morales',
      CursoName: 'Libre expresion de Derechos',
      CursoDescription: 'Derechos y deberes de los ciudadanos',
      CursoUrl:'assets/imagenCursos/Diseño.jpg',
      CursoVideoUrl:'',
    }

  ];
  obtenerCursos() {
    return [...this.cursos];
  }

}
