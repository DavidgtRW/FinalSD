import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { Libro } from 'src/model/libro';

@Component({
  selector: 'app-consultar-libro',
  templateUrl: './consultar-libro.component.html',
  styleUrls: ['./consultar-libro.component.css']
})
export class ConsultarLibroComponent implements OnInit {

  libro: Libro = new Libro('','', 0, 0);

  constructor(
    private utilService: UtilsService,
    private bibliotecaService: BibliotecaService,
    private configuracionAccionService: ConfiguracionAccionsService,
    private router: Router,
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.activedRoute.params.subscribe(param => {
      if ("id" in param) {
       
        this.libro._id = param.id;

        this.cargarInfoLibro(this.libro._id);
      }
    });
  }

  cargarInfoLibro(id: string){
    this.bibliotecaService.getServices(`libros/edit/${id}`)
      .then(resultado => {
        console.log("RES:: ", resultado);
        if (resultado) {
          this.libro.nombre = resultado.nombre;
          this.libro.copias = resultado.copias;
          this.libro.copiasDisponibles = resultado.copiasDisponibles;
        }
      }).catch(err => {
        this.utilService.showErrorMessage(err);
      });
  }

}
