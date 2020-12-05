import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { Libro } from 'src/model/libro';

@Component({
  selector: 'app-eliminar-libro',
  templateUrl: './eliminar-libro.component.html',
  styleUrls: ['./eliminar-libro.component.css']
})
export class EliminarLibroComponent implements OnInit {

  libro: Libro = new Libro('', '', 0, 0);

  constructor(
    private utilService: UtilsService,
    private activedRoute: ActivatedRoute,
    private bibliotecaService: BibliotecaService,
    private configuracionAccionService: ConfiguracionAccionsService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.activedRoute.params.subscribe(param => {
      if ("id" in param && "nombre") {
       
        this.libro._id = param.id;
        this.libro.nombre = param.nombre;
      }
    });
  }

  eliminarLibro() {
    this.bibliotecaService.deleteServices(`libros/delete/${this.libro._id}`)
    .then(resultado => {
      console.log("RES2:: ", resultado);
      if(resultado){
        console.log("RES3:: ");
        this.actualizarLibros();
        this.nuevoLibro();
        this.regresarAdministrarLibros();
      }
    }).catch(err => {
      this.utilService.showErrorMessage(err);
    });

  }

  nuevoLibro() {
    this.libro = new Libro('', '', 0, 0);
  }

  actualizarLibros() {
    this.configuracionAccionService.actualizarListaLibros(true);
  }

  regresarAdministrarLibros(): void {
    this.router.navigate(['/libros']);
  }

}
