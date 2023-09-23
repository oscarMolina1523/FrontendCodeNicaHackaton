import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent {

  constructor(private router: Router){}

  fileSelected: File | null = null;
  filePreview: string | ArrayBuffer | null = null;
  isImage: boolean = false;

  MisCursos(){
    this.router.navigate(['/cursos']);
  }

  onFileSelected(event: any): void {
    this.fileSelected = event.target.files[0];
    if (this.fileSelected) {
      this.previewFile();
    }
  }

  previewFile(): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.filePreview = reader.result;
      this.isImage = this.fileSelected!.type.startsWith('image');
    };
    reader.readAsDataURL(this.fileSelected!);
  }
}
