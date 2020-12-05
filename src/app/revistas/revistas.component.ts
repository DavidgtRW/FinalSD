import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Revista } from 'src/model/revista';
import { BibliotecaService } from '../service/biblioteca.service';
import { ConfiguracionAccionsService } from '../service/configuracion-accions.service';
import { UtilsService } from '../service/utils.service';

@Component({
  selector: 'app-revistas',
  templateUrl: './revistas.component.html',
  styleUrls: ['./revistas.component.css']
})
export class RevistasComponent implements OnInit, OnDestroy {

  private suscripcion: Subscription = new Subscription();
  
  revistasList: Revista [] = [];

  //Filtros
  filtrarNombreLibro = false;
  filtroNombreLibro: any;
  filtrarCopiasLibro = false;
  filtroCopiasLibro: any;
  filtrarDisponibleLibro = false;
  filtroDisponibleLibro: any;

  constructor(
    private utilService: UtilsService,
    private bibliotecaService: BibliotecaService,
    private configuracionAccionService: ConfiguracionAccionsService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.cargarRevistas();
    this.suscripcion = this.configuracionAccionService.revistaActual.subscribe((result) => {
      console.log(result);
      if (result) {
        this.cargarRevistas();
        this.configuracionAccionService.actualizarListaRevistas(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  cargarRevistas(){
    this.revistasList = [];
    this.bibliotecaService.getServices("revistas")
      .then(resultado => {
        console.log("RES:: ", resultado);
        if (resultado) {
          resultado.forEach((element: { _id: string; nombre: string; copias: number; copiasDisponibles: number; }) => {
            this.revistasList.push(new Revista(element._id, element.nombre, element.copias, element.copiasDisponibles));
          });
        }
      }).catch(err => {
        this.utilService.showErrorMessage(err);
      });
  }
  

  editarRevista(revista: Revista){
    this.router.navigate([
      '/revistas',
      {
        outlets: {
          outletEditarRevista:
            ['editar-revista', revista._id]
        }
      }]);
  }

  eliminarRevista(revista: Revista){
    this.router.navigate([
      '/revistas',
      {
        outlets: {
          outletEliminarRevista:
            ['eliminar-revista', revista._id, revista.nombre]
        }
      }]);
  }

  aplicarFiltrarNombreLibro() {
    this.filtrarNombreLibro = !this.filtrarNombreLibro;
  }
  aplicarFiltrarCopiaLibro() {
    this.filtrarCopiasLibro = !this.filtrarCopiasLibro;
  }
  aplicarFiltrarDisponibleLibro() {
    this.filtrarDisponibleLibro = !this.filtrarDisponibleLibro;
  }

}
