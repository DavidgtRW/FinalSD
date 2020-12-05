import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { RevistasComponent } from './revistas/revistas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { MiembrosPersonalComponent } from './miembros/miembros-personal/miembros-personal.component';
import { MiembrosBibliotecaComponent } from './miembros/miembros-biblioteca/miembros-biblioteca.component';
import { ReservarLibroComponent } from './reservas/reservar-libro/reservar-libro.component';
import { ReservarRevistaComponent } from './reservas/reservar-revista/reservar-revista.component';
import { CrearLibroComponent } from './libros/crear-libro/crear-libro.component';
import { SharedUiModule } from './shared/shared-ui.model';
import { ModalGeneralComponent } from './modal-general/modal-general.component';
import { EditarLibroComponent } from './libros/editar-libro/editar-libro.component';
import { EliminarLibroComponent } from './libros/eliminar-libro/eliminar-libro.component';
import { CrearRevistaComponent } from './revistas/crear-revista/crear-revista.component';
import { EditarRevistaComponent } from './revistas/editar-revista/editar-revista.component';
import { EliminarRevistaComponent } from './revistas/eliminar-revista/eliminar-revista.component';
import { CrearMiembrosBibliotecaComponent } from './miembros/miembros-biblioteca/crear-miembros-biblioteca/crear-miembros-biblioteca.component';
import { EliminarMiembrosBibliotecaComponent } from './miembros/miembros-biblioteca/eliminar-miembros-biblioteca/eliminar-miembros-biblioteca.component';
import { CrearMiembrosPersonalComponent } from './miembros/miembros-personal/crear-miembros-personal/crear-miembros-personal.component';
import { EliminarMiembrosPersonalComponent } from './miembros/miembros-personal/eliminar-miembros-personal/eliminar-miembros-personal.component';
import { ConfirmarLibroComponent } from './reservas/reservar-libro/confirmar-libro/confirmar-libro.component';
import { ConfirmarRevistaComponent } from './reservas/reservar-revista/confirmar-revista/confirmar-revista.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LibrosComponent,
    RevistasComponent,
    MenuSuperiorComponent,
    MiembrosPersonalComponent,
    MiembrosBibliotecaComponent,
    ReservarLibroComponent,
    ReservarRevistaComponent,
    CrearLibroComponent,
    ModalGeneralComponent,
    EditarLibroComponent,
    EliminarLibroComponent,
    CrearRevistaComponent,
    EditarRevistaComponent,
    EliminarRevistaComponent,
    CrearMiembrosBibliotecaComponent,
    EliminarMiembrosBibliotecaComponent,
    CrearMiembrosPersonalComponent,
    EliminarMiembrosPersonalComponent,
    ConfirmarLibroComponent,
    ConfirmarRevistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SharedUiModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
