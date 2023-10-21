import { Component } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { getDownloadURL, getStorage, ref, uploadBytes, } from 'firebase/storage';
import { CursosComponent } from '../../all-cursos/cursos.model';
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
    this.videoSelected = event.target.files[0];

    if (this.videoSelected) {
      const storage = getStorage();
      const videoRef = ref(storage, `videos/${this.videoSelected.name}`);

      try {
        // Subir el video a Firebase Storage
        await uploadBytes(videoRef, this.videoSelected);

        // Obtener la URL del video y asignarla a videoUrl
        const url = await getDownloadURL(videoRef);
        this.videoUrl = url;
        if(url!=null){
          this.selectedVideoName = this.videoSelected.name;
        }
        else{
          this.selectedVideoName='';
        }
      } catch (error) {
        console.error('Error al subir o obtener la URL del video:', error);
      }
    }
  }


  onImageSelected($event: any): void {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `curso/${file.name}`);
    uploadBytes(imgRef, file)
      .then(() => getDownloadURL(imgRef)) // Espera a que la carga esté completa antes de obtener la URL
      .then(url => {
        if (url != null) {
          this.selectedImageName = url;
          console.log(url); // Aquí obtendrás la URL pública del archivo subido
        } else {
          this.selectedImageName = '';
        }
      })
      .catch(error => console.log(error));
  }


  guardarCurso(form: NgForm) {
    console.log(form.value.nombreCurso);

    if (form.valid ) {
      console.log(form.value.nombreCurso);
      const nameCurso: string = form.value.nombreCurso;
      const descCurso: string = form.value.descripcionCurso;
      const inst: string = form.value.instructor;
      const nombre: string = form.value.nombreModulo;
      const descripcion: string = form.value.descripcionModulo;
      const nameclase: string = form.value.nombreClase;
      const descclase: string = form.value.descripcionClase;
      const video: string = this.selectedVideoName;
      const imagen: string = this.selectedImageName;


      const Cursos: CursosComponent = {
        nombreCurso: nameCurso, descripcionCurso: descCurso, instructor: inst,
        modulosCurso: [{nombreModulo: nombre, descripcionModulo: descripcion, clasesModulo: [{ nombreClase: nameclase, descripcion: descclase, urlVideo: video}]}], imagenCurso:{imagenUrl:imagen},
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
