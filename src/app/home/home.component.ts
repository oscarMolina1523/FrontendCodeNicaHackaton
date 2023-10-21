import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosComponent } from './all-cursos/cursos.model';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  caruselItem = [{
    imageSrc: 'assets/videos/acuarela.webp',
    title: 'Howard G. Hendricks',
    subtitle: '“La enseñanza que deja huella no es la que se hace de cabeza a cabeza, sino de corazón a corazón”',
    content: 'Howard George Hendricks fue profesor en el Seminario Teológico de Dallas y orador para Promise Keepers.',
  }, {

    imageSrc: 'assets/videos/acuarela2.webp',
    title: 'Karl A. Menninger',
    subtitle: '“Lo que se les dé a los niños, los niños darán a la sociedad”',
    content: 'Menninger fue un psiquiatra estadounidense y autor de numerosos libros entre los que destaca “Theory of Psychoanalytic Technique”',
  },{
    imageSrc:'assets/videos/acuarela3.webp',
    title:'Jhon Dewey',
    subtitle:'“La educación no es preparación para la vida; la educación es la vida en sí misma”',
    content:'Jhon Dewey fue uno de los fundadores de la filosofía del pragmatismo, fue pedagogo, psicólogo y filósofo estadounidense'
  },{
    imageSrc:'assets/videos/acuarela4.webp',
    title:'Benjamin Franklin',
    subtitle:'“Una inversión en conocimiento paga el mejor interés”',
    content:'Franklin es considerado uno de los Padres Fundadores de los Estados Unidos, fue político, científico e inventor de EEUU.'
  }];
  mostrarFlechaIzquierda = false;
  mostrarFlechaDerecha = true;

  images: CursosComponent[] = [];
  currentIndex = 0;


  constructor(
    private cursosService: CursosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe(
      (data: any) => {
        this.images = data.$values;
      },
      (error) => {
        console.error('Error al obtener cursos', error);
      }
    );
  }

  /*este es el codigo del slider de imagenes de la cabecera*/
  @ViewChild('slider', { static: true }) slider!: ElementRef;

  desplazarIzquierda() {
    this.slider.nativeElement.scrollLeft -= this.slider.nativeElement.offsetWidth;
    this.actualizarVisibilidadFlechas();
  }

  desplazarDerecha() {
    this.slider.nativeElement.scrollLeft += this.slider.nativeElement.offsetWidth;
    this.actualizarVisibilidadFlechas();
  }

  actualizarVisibilidadFlechas() {
    const maxScrollLeft = this.slider.nativeElement.scrollWidth - this.slider.nativeElement.clientWidth;
    this.mostrarFlechaIzquierda = this.slider.nativeElement.scrollLeft > 0;
    this.mostrarFlechaDerecha = this.slider.nativeElement.scrollLeft < maxScrollLeft;
  }
}

