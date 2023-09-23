import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AllCursosComponent } from './home/all-cursos/all-cursos.component';
import { HomeComponent } from './home/home.component';
import { PerfilUserComponent } from './home/perfil-user/perfil-user.component';
import { SpecificCursoComponent } from './home/specific-curso/specific-curso.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'perfil', component: PerfilUserComponent, canActivate: [AuthGuard] },
  { path: 'selection-curse', component: SpecificCursoComponent, canActivate: [AuthGuard]},
  { path: 'cursos', component: AllCursosComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
