import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LibrosComponent,
    RevistasComponent,
    MenuSuperiorComponent,
    MiembrosPersonalComponent,
    MiembrosBibliotecaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
