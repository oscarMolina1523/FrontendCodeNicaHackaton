import { Component, OnInit } from '@angular/core';
import { Storage, getDownloadURL, listAll, ref, uploadBytes } from '@angular/fire/storage';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';


@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent implements OnInit{

  constructor(private router: Router, private storage:Storage, private dialog: MatDialog){}

  ngOnInit(): void {
    this.previewFile();
  }

  fileSelected: File | null = null;
  filePreview: string | ArrayBuffer | null = null;
  isImage: boolean = false;

  MisCursos(){
    this.router.navigate(['/cursos']);
  }
  perfil?:string;

  onFileSelected($event: any): void {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `perfil/${file.name}`);
    uploadBytes(imgRef, file).then(response => {
      console.log(response)
      this.previewFile();
    })
      .catch(error => console.log(error));
  }

  previewFile(): void {
    const imagesRef = ref(this.storage, 'perfil');
    listAll(imagesRef).then(async response => {
      console.log(response);
      this.perfil;
      if(response.items.length>0){
        const latestItem = response.items[response.items.length - 1];
        const url = await getDownloadURL(latestItem);
        this.perfil=url;
      }
    }).catch(error => console.log(error));
  }

  abrirDialog() {
    const dialogRef = this.dialog.open(CrearCursoComponent, {
      width: '550px'
    });
  }

 /*aqui esta para subir un video y recuperar la url del video*/
  /* videoSelected: File | null = null;
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
      } catch (error) {
        console.error('Error al subir o obtener la URL del video:', error);
      }
    }
  } */
}
