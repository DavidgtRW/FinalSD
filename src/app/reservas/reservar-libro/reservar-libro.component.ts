import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MiembrosPersonalComponent } from 'src/app/miembros/miembros-personal/miembros-personal.component';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { Libro } from 'src/model/libro';
import { MiembroBiblioteca } from 'src/model/miembro-biblioteca';
import { MiembroPersonal } from 'src/model/miembro-personal';

@Component({
  selector: 'app-reservar-libro',
  templateUrl: './reservar-libro.component.html',
  styleUrls: ['./reservar-libro.component.css']
})
export class ReservarLibroComponent implements OnInit, OnDestroy {


  miembrosPersonalList: MiembroPersonal [] = [];
  miembrosBibliotecaList: MiembroBiblioteca [] = [];

  private suscripcion: Subscription = new Subscription();

  //Filtros
  filtrarNombreMiembroBiblioteca = false;
  filtroNombreMiembroBiblioteca: any;
  filtrarNombreMiembroPersonal = false;
  filtroNombreMiembroPersonal: any;

  constructor(
    private utilService: UtilsService,
    private bibliotecaService: BibliotecaService,
    private configuracionAccionService: ConfiguracionAccionsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.cargarMiembrosPersonal();
    this.cargarMiembrosBiblioteca();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  cargarMiembrosPersonal(){
    this.miembrosPersonalList = [];
    this.bibliotecaService.getServices("personal")
      .then(resultado => {
        console.log("RES:: ", resultado);
        if (resultado) {
          resultado.forEach((element: { _id: string; nombre: string; copiasLibro: string; copiasRevistas: string;}) => {
            this.miembrosPersonalList.push(new MiembroPersonal(element._id, element.nombre, element.copiasLibro, element.copiasRevistas));
          });
        }
      }).catch(err => {
        this.utilService.showErrorMessage(err);
      });
  }

  cargarMiembrosBiblioteca(){
    this.miembrosBibliotecaList = [];
    this.bibliotecaService.getServices("miembros")
      .then(resultado => {
        console.log("RES:: ", resultado);
        if (resultado) {
          resultado.forEach((element: { _id: string; nombre: string; copiasLibro: string; }) => {
            this.miembrosBibliotecaList.push(new MiembroBiblioteca(element._id, element.nombre, element.copiasLibro));
          });
        }
      }).catch(err => {
        this.utilService.showErrorMessage(err);
      });
  }


 

  aplicarFiltrarNombreMiembroBiblioteca() {
    this.filtrarNombreMiembroBiblioteca = !this.filtrarNombreMiembroBiblioteca;
  }

  aplicarFiltrarNombreMiembroPersonal() {
    this.filtrarNombreMiembroPersonal = !this.filtrarNombreMiembroPersonal;
  }

  reservarLibroPersonal(miembro: MiembroPersonal){
    this.router.navigate([
      '/reservar-libro',
      {
        outlets: {
          outletReservarLibroPresonal:
            ['confirmar-libro-personal', miembro._id, miembro.nombre]
        }
      }]);
  }

  reservarLibroBiblioteca(miembro: MiembroBiblioteca){
    this.router.navigate([
      '/reservar-libro',
      {
        outlets: {
          outletReservarLibro:
            ['confirmar-libro', miembro._id, miembro.nombre]
        }
      }]);
  }

}
