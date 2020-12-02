import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { MiembrosBibliotecaComponent } from './miembros/miembros-biblioteca/miembros-biblioteca.component';
import { MiembrosPersonalComponent } from './miembros/miembros-personal/miembros-personal.component';
import { RevistasComponent } from './revistas/revistas.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'revistas', component: RevistasComponent},
  {path: 'miembro-biblioteca', component: MiembrosBibliotecaComponent},
  {path: 'miembro-personal', component: MiembrosPersonalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
