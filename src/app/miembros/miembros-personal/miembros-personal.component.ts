import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { MiembroPersonal } from 'src/model/miembro-personal';

@Component({
  selector: 'app-miembros-personal',
  templateUrl: './miembros-personal.component.html',
  styleUrls: ['./miembros-personal.component.css']
})
export class MiembrosPersonalComponent implements OnInit, OnDestroy {

  miembrosList: MiembroPersonal [] = [];
  private suscripcion: Subscription = new Subscription();

  //filtros
  filtrarNombreMiembro = false;
  filtroNombreMiembro: any;
  filtrarMiembroLibro = false;
  filtroMiembroLibro: any;
  filtrarMiembroRevista = false;
  filtroMiembroRevista: any;

  constructor(
    private utilService: UtilsService,
    private bibliotecaService: BibliotecaService,
    private configuracionAccionService: ConfiguracionAccionsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarMiembrosPersonal();
    this.suscripcion = this.configuracionAccionService.miembroPersonalActual.subscribe((result) => {
      console.log(result);
      if (result) {
        this.cargarMiembrosPersonal();
        this.configuracionAccionService.actualizarListaMiembrosPersonal(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  cargarMiembrosPersonal(){
    this.miembrosList = [];
    this.bibliotecaService.getServices("personal")
      .then(resultado => {
        console.log("RES:: ", resultado);
        if (resultado) {
          resultado.forEach((element: { _id: string; nombre: string; copiasLibro: string; copiasRevistas: string;}) => {
            this.miembrosList.push(new MiembroPersonal(element._id, element.nombre, element.copiasLibro, element.copiasRevistas));
          });
        }
      }).catch(err => {
        this.utilService.showErrorMessage(err);
      });
  }

  eliminarMiembroPersonal(miembro: MiembroPersonal){
    this.router.navigate([
      '/miembro-personal',
      {
        outlets: {
          outletEliminarMiembrosPersonal:
            ['eliminar-miembros-personal', miembro._id, miembro.nombre]
        }
      }]);
  }

  aplicarFiltrarNombreMiembro() {
    this.filtrarNombreMiembro = !this.filtrarNombreMiembro;
  }
  aplicarFiltrarMiembroLibro() {
    this.filtrarMiembroLibro = !this.filtrarMiembroLibro;
  }
  aplicarFiltrarMiembroRevista() {
    this.filtrarMiembroRevista = !this.filtrarMiembroRevista;
  }
  
  consultarInfoLibro(miembro: MiembroPersonal){
    this.router.navigate([
      '/miembro-personal',
      {
        outlets: {
          outletConsultarLibroMiembrosPersonal:
            ['consultar-libro-personal', miembro.copiasLibro]
        }
      }]);
  }

  consultarInfoRevista(miembro: MiembroPersonal){
    this.router.navigate([
      '/miembro-personal',
      {
        outlets: {
          outletConsultarRevistaMiembrosPersonal:
            ['consultar-revista-personal', miembro.copiasRevistas]
        }
      }]);
  }
  

}
