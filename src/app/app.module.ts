import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllCursosComponent } from './home/all-cursos/all-cursos.component';
import { BaseCaruselComponent } from './home/base-carusel/base-carusel.component';
import { HomeComponent } from './home/home.component';
import { CrearCursoComponent } from './home/perfil-user/crear-curso/crear-curso.component';
import { PerfilUserComponent } from './home/perfil-user/perfil-user.component';
import { ComentariosComponent } from './home/specific-curso/comentarios/comentarios.component';
import { FormulariosComponent } from './home/specific-curso/formularios/formularios.component';
import { SpecificCursoComponent } from './home/specific-curso/specific-curso.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { ImagePreloadService } from './precarga.service';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    PerfilUserComponent,
    AllCursosComponent,
    SpecificCursoComponent,
    ComentariosComponent,
    FormulariosComponent,
    BaseCaruselComponent,
    CrearCursoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (preloadService: ImagePreloadService) =>
    () => preloadService.preloadImages
    (['assets/videos/acuarela.webp', 'assets/videos/acuarela2.webp','assets/videos/acuarela3.webp','assets/videos/acuarela4.webp']),
    deps: [ImagePreloadService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
