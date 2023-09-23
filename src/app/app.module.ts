import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderListComponent } from './header-list/header-list.component';
import { HeaderComponent } from './header/header.component';
import { AllCursosComponent } from './home/all-cursos/all-cursos.component';
import { HomeComponent } from './home/home.component';
import { PerfilUserComponent } from './home/perfil-user/perfil-user.component';
import { ComentariosComponent } from './home/specific-curso/comentarios/comentarios.component';
import { SpecificCursoComponent } from './home/specific-curso/specific-curso.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { ImagePreloadService } from './precarga.service';
import { RegisterComponent } from './register/register.component';
import { FormulariosComponent } from './home/specific-curso/formularios/formularios.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HeaderListComponent,
    PerfilUserComponent,
    AllCursosComponent,
    SpecificCursoComponent,
    ComentariosComponent,
    FormulariosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule
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
