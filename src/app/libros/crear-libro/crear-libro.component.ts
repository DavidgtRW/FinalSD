import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/utils.service';
import { Libro } from 'src/model/libro';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { Subscription } from 'rxjs';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit, OnDestroy {


  libro: Libro = new Libro('', '', 0, 0);
  private suscripcion: Subscription = new Subscription();


  constructor(
    private utilService: UtilsService,
    private bibliotecaService: BibliotecaService,
    private configuracionAccionService: ConfiguracionAccionsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  guardarLibro() {
    this.libro.copiasDisponibles = this.libro.copias;
    this.bibliotecaService.postServices('libros/new-libro', this.libro)
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
