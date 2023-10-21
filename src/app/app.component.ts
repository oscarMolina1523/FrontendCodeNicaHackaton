import { Component, OnInit } from '@angular/core';
import { Storage, getDownloadURL, listAll, ref, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CodeNica-App';
  images: string[];

  constructor(private storage: Storage) {
    this.images = [];
  }

  ngOnInit(): void {
    this.getImages();
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `images/${file.name}`);
    uploadBytes(imgRef, file).then(response => {
      console.log(response)
      this.getImages();
    })
      .catch(error => console.log(error));

  }

  getImages() {
    const imagesRef = ref(this.storage, 'images');
    listAll(imagesRef).then(async response => {
      console.log(response);
      this.images = [];
      for (let item of response.items) {
        const url = await getDownloadURL(item);
        this.images.push(url);
      }
    }).catch(error => console.log(error));

  }
}
