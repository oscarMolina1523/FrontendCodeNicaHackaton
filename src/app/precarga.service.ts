import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagePreloadService {
  preloadImages(urls: string[]): Promise<any[]> {
    const allImages = urls.map(url => this.preloadImage(url));
    return Promise.all(allImages);
  }

  preloadImage(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = () => resolve();
      image.onerror = reject;
    });
  }
}
