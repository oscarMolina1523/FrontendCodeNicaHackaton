import { Component } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Cursos2Component } from '../../all-cursos/cursos2.model';
import { CursosService } from '../../cursos.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent {

  constructor(private storage: Storage, private cursoService: CursosService, private cursoDialogRefe: MatDialog) { }

  selectedVideoName!: string;
  selectedImageName!: string;

  videoSelected: File | null = null;
  videoUrl: string | null = null;

  async onVideoSelected(event: any): Promise<void> {
    const file = event.target.files[0];
    const videoRef = ref(this.storage, `videos/${file.name}`);
    try {
      await uploadBytes(videoRef, file);
      const url = await getDownloadURL(videoRef);
      if (url != null) {
        this.selectedVideoName = url;
        console.log(url); // Aquí obtendrás la URL pública del video subido
      } else {
        this.selectedVideoName = '';
      }
    } catch (error) {
      console.error('Error al subir o obtener la URL del video:', error);
    }
  }




  onImageSelected($event: any): void {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `curso/${file.name}`);
    uploadBytes(imgRef, file).then(() => getDownloadURL(imgRef))
      .then(url => {
        if(url!=null){
          this.selectedImageName = url;
          console.log(url);
        }
        else{
          this.selectedImageName='';
        }
      })
      .catch(error => console.log(error));
  }

  guardarCurso(form: NgForm) {


    if (form.valid && this.selectedImageName!=null && this.selectedVideoName!=null) {

      const nameCurso: string = form.value.nombreCurso;
      const descCurso: string = form.value.descripcionCurso;
      const inst: string = form.value.instructor;
      const nombre: string = form.value.nombreModulo;
      const descripcion: string = form.value.descripcionModulo;
      const nameclase: string = form.value.nombreClase;
      const descclase: string = form.value.descripcionClase;
      const video: string = this.selectedVideoName;
      const imagen: string = this.selectedImageName;


      const Cursos: Cursos2Component = {
        nombreCurso: nameCurso, descripcionCurso: descCurso, instructor: inst,
        modulosCurso: [{nombreModulo: nombre, descripcionModulo: descripcion, clasesModulo: [{ nombreClase: nameclase, descripcion: descclase, urlVideo: video}]}], imagenCurso: [{imagenUrl:imagen}],
        modulosComentario: [{nombreUsuario:'',  textoUsuario:''}],
        cursoIncripcion: [{inscripcionUsuario:''}],
      };
      console.log(Cursos);
      this.cursoService.crearCurso(Cursos);

    }
  }

  /*closeDialogIfReady() {
    if (this.selectedImageName && this.selectedVideoName) {
      this.cursoDialogRefe.closeAll();
    }
  }*/
}
