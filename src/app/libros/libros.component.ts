import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Libro } from 'src/model/libro';
import { BibliotecaService } from '../service/biblioteca.service';
import { ConfiguracionAccionsService } from '../service/configuracion-accions.service';
import { UtilsService } from '../service/utils.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit, OnDestroy {

  librosList: Libro[] = [];

  private suscripcion: Subscription = new Subscription();

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

    this.cargarLibros();
    this.suscripcion = this.configuracionAccionService.libroActual.subscribe((result) => {
      console.log(result);
      if (result) {
        this.cargarLibros();
        this.configuracionAccionService.actualizarListaLibros(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  
  cargarLibros(){
    this.librosList = [];
    this.bibliotecaService.getServices("libros")
      .then(resultado => {
        console.log("RES:: ", resultado);
        if (resultado) {
          resultado.forEach((element: { _id: string; nombre: string; copias: number; copiasDisponibles: number; }) => {
            this.librosList.push(new Libro(element._id, element.nombre, element.copias, element.copiasDisponibles));
          });
        }
      }).catch(err => {
        this.utilService.showErrorMessage(err);
      });
  }

  editarLibro(libro: Libro){
    this.router.navigate([
      '/libros',
      {
        outlets: {
          outletEditarLibro:
            ['editar-libro', libro._id]
        }
      }]);
  }

  eliminarLibro(libro: Libro){
    this.router.navigate([
      '/libros',
      {
        outlets: {
          outletEliminarLibro:
            ['eliminar-libro', libro._id, libro.nombre]
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
