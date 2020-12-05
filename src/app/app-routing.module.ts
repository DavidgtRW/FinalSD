import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { CrearLibroComponent } from './libros/crear-libro/crear-libro.component';
import { EditarLibroComponent } from './libros/editar-libro/editar-libro.component';
import { EliminarLibroComponent } from './libros/eliminar-libro/eliminar-libro.component';
import { LibrosComponent } from './libros/libros.component';
import { ConsultarLibroComponent } from './miembros/miembros-biblioteca/consultar-libro/consultar-libro.component';
import { ConsultarLibroComponentAux } from './miembros/miembros-personal/consultar-libro/consultar-libro.component';
import { ConsultarRevistaComponent } from './miembros/miembros-personal/consultar-revista/consultar-revista.component';
import { CrearMiembrosBibliotecaComponent } from './miembros/miembros-biblioteca/crear-miembros-biblioteca/crear-miembros-biblioteca.component';
import { EliminarMiembrosBibliotecaComponent } from './miembros/miembros-biblioteca/eliminar-miembros-biblioteca/eliminar-miembros-biblioteca.component';
import { MiembrosBibliotecaComponent } from './miembros/miembros-biblioteca/miembros-biblioteca.component';
import { CrearMiembrosPersonalComponent } from './miembros/miembros-personal/crear-miembros-personal/crear-miembros-personal.component';
import { EliminarMiembrosPersonalComponent } from './miembros/miembros-personal/eliminar-miembros-personal/eliminar-miembros-personal.component';
import { MiembrosPersonalComponent } from './miembros/miembros-personal/miembros-personal.component';
import { ConfirmarLibroComponent } from './reservas/reservar-libro/confirmar-libro/confirmar-libro.component';
import { ReservarLibroComponent } from './reservas/reservar-libro/reservar-libro.component';
import { ConfirmarRevistaComponent } from './reservas/reservar-revista/confirmar-revista/confirmar-revista.component';
import { ReservarRevistaComponent } from './reservas/reservar-revista/reservar-revista.component';
import { CrearRevistaComponent } from './revistas/crear-revista/crear-revista.component';
import { EditarRevistaComponent } from './revistas/editar-revista/editar-revista.component';
import { EliminarRevistaComponent } from './revistas/eliminar-revista/eliminar-revista.component';
import { RevistasComponent } from './revistas/revistas.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'libros', component: LibrosComponent, children: [
      { path: 'crear-libro', component: CrearLibroComponent, outlet: 'outletCrearLibro' },
      { path: 'editar-libro/:id', component: EditarLibroComponent, outlet: 'outletEditarLibro' },
      { path: 'eliminar-libro/:id/:nombre', component: EliminarLibroComponent, outlet: 'outletEliminarLibro' },
    ]
  },
  {
    path: 'revistas', component: RevistasComponent, children: [
      { path: 'crear-revista', component: CrearRevistaComponent, outlet: 'outletCrearRevista' },
      { path: 'editar-revista/:id', component: EditarRevistaComponent, outlet: 'outletEditarRevista' },
      { path: 'eliminar-revista/:id/:nombre', component: EliminarRevistaComponent, outlet: 'outletEliminarRevista' },
    ]
  },
  {
    path: 'miembro-biblioteca', component: MiembrosBibliotecaComponent, children: [
      { path: 'crear-miembros-biblioteca', component: CrearMiembrosBibliotecaComponent, outlet: 'outletCrearMiembrosBiblioteca' },
      { path: 'eliminar-miembros-biblioteca/:id/:nombre', component: EliminarMiembrosBibliotecaComponent, outlet: 'outletEliminarMiembrosBiblioteca' },
      { path: 'consultar-libro-biblioteca/:id', component: ConsultarLibroComponent, outlet: 'outletConsultarLibroMiembrosBiblioteca' },
    ]
  },
  {
    path: 'miembro-personal', component: MiembrosPersonalComponent, children: [
      { path: 'crear-miembros-personal', component: CrearMiembrosPersonalComponent, outlet: 'outletCrearMiembrosPersonal' },
      {
        path: 'eliminar-miembros-personal/:id/:nombre', component: EliminarMiembrosPersonalComponent,
        outlet: 'outletEliminarMiembrosPersonal'
      },
      { path: 'consultar-libro-personal/:id', component: ConsultarLibroComponentAux, outlet: 'outletConsultarLibroMiembrosPersonal' },
      { path: 'consultar-revista-personal/:id', component: ConsultarRevistaComponent, outlet: 'outletConsultarRevistaMiembrosPersonal' },
    ]
  },
  {
    path: 'reservar-libro', component: ReservarLibroComponent, children: [
      { path: 'confirmar-libro/:id/:nombre', component: ConfirmarLibroComponent, outlet: 'outletReservarLibro' },
      { path: 'confirmar-libro-personal/:id/:nombre', component: ConfirmarLibroComponent, outlet: 'outletReservarLibroPresonal' },
    ]
  },
  {
    path: 'reservar-revista', component: ReservarRevistaComponent, children: [
      { path: 'confirmar-revista/:id/:nombre', component: ConfirmarRevistaComponent, outlet: 'outletReservarRevista' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
