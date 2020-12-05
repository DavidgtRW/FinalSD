import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MiembrosBibliotecaComponent } from 'src/app/miembros/miembros-biblioteca/miembros-biblioteca.component';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { Libro } from 'src/model/libro';
import { MiembroBiblioteca } from 'src/model/miembro-biblioteca';
import { MiembroPersonal } from 'src/model/miembro-personal';
import { ReservaLibro } from 'src/model/reserva-libro';

@Component({
  selector: 'app-confirmar-libro',
  templateUrl: './confirmar-libro.component.html',
  styleUrls: ['./confirmar-libro.component.css']
})
export class ConfirmarLibroComponent implements OnInit {


  reservaLibro: ReservaLibro = new ReservaLibro('1', '', '');
  nombreMiembro: string = '';

  librosList: Libro[] = [];


  constructor(
    private utilService: UtilsService,
    private bibliotecaService: BibliotecaService,
    private configuracionAccionService: ConfiguracionAccionsService,
    private router: Router,
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.cargarLibros();
    this.activedRoute.params.subscribe(param => {
      if ("id" in param && "nombre") {

        this.reservaLibro.idMiembro = param.id;
        this.nombreMiembro = param.nombre;

      }
    });
  }

  cargarLibros() {
    this.librosList = [];
    this.bibliotecaService.getServices("libros")
      .then(resultado => {
        console.log("RES:: ", resultado);
        if (resultado) {
          resultado.forEach((element: { _id: string; nombre: string; copias: number; copiasDisponibles: number; }) => {
            this.librosList.push(new Libro(element._id, element.nombre, element.copias, element.copiasDisponibles));
          });
          //this.cargarMiembrosPersonal();
        }
      }).catch(err => {
        this.utilService.showErrorMessage(err);
      });
  }

  prb() { }

  reservarLibro(libro: Libro) {

    this.reservaLibro.id = libro._id;
    console.log(this.reservaLibro);
    // this.bibliotecaService.postServices('personal/new-personal', this.reservaLibro)
    //   .then(resultado => {
    //     console.log("RES2:: ", resultado);
    //     if (resultado) {
    //       console.log("RES3:: ");
          this.nuevoMiembro();
          this.regresarAdministrarMiembros();
      //   }
      // }).catch(err => {
      //   this.utilService.showErrorMessage(err);
      // });
  }

  nuevoMiembro(){
    this.reservaLibro = new ReservaLibro('1', '', '');
  }  
  
  regresarAdministrarMiembros(){
    this.router.navigate(['/reservar-libro']);
  }


}
