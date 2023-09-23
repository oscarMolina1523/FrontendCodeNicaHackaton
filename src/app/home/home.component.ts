import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosComponent } from './all-cursos/cursos.model';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition('derecha <=> izquierda', [
        style({ transform: 'translateX({{ from }}%)' }),
        animate('2000ms linear', style({ transform: 'translateX({{ to }}%)' })),
      ])
    ])
  ]
})
export class HomeComponent {
  mostrarFlechaIzquierda = false;
  mostrarFlechaDerecha = true;

  images: CursosComponent[] = [];
  images2: CursosComponent[] = [];
  animationParams: { from: number, to: number } = { from: 0, to: 100 };
  direccion: 'izquierda' | 'derecha' = 'derecha';
  currentIndex = 0;
  indiceIndex = 0;

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.images = this.cursosService.obtenerCursos();
    this.images2 = this.cursosService.obtenerCursos();
  }

  redirigirACursoEspecifico(imagen: any): void {
    this.router.navigate(['/selection-curse'], {
      relativeTo: this.route,
      queryParams: {
        CursoUrl: imagen.CursoUrl,
        CursoDescription: imagen.CursoDescription,
        CursoVideoUrl: imagen.CursoVideoUrl,
      }
    });
  }

  navegar(direccion: 'izquierda' | 'derecha'): void {
    const numVisible = 5; // Número de imágenes visibles
    if (direccion === 'izquierda' && this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.direccion = 'izquierda';
    } else if (direccion === 'derecha' && this.currentIndex < this.images.length - numVisible) {
      this.currentIndex += 1;
      this.direccion = 'derecha';
    }
  }

  navegar2(direction: 'izquierda' | 'derecha'): void {
    if (direction === 'izquierda' && this.indiceIndex > 0) {
      this.indiceIndex -= 1;
      this.direccion = 'izquierda';
    } else if (direction === 'derecha' && this.indiceIndex < this.images2.length - 3) {
      this.indiceIndex += 1;
      this.direccion = 'derecha';
    }
  }

  getAnimationState(index: number): string {
    if (index === this.currentIndex) {
      return 'derecha';
    } else if (index === this.currentIndex + 2) {
      return 'izquierda';
    } else {
      return '';
    }
  }

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

