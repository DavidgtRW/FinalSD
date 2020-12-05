import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { Revista } from 'src/model/revista';

@Component({
  selector: 'app-crear-revista',
  templateUrl: './crear-revista.component.html',
  styleUrls: ['./crear-revista.component.css']
})
export class CrearRevistaComponent implements OnInit, OnDestroy {

  revista: Revista = new Revista('', '', 0, 0);
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

  guardarRevista() {
    this.revista.copiasDisponibles = this.revista.copias;
    this.bibliotecaService.postServices('revistas/new-revista', this.revista)
    .then(resultado => {
      console.log("RES2:: ", resultado);
      if(resultado){
        console.log("RES3:: ");
        this.actualizarRevistas();
        this.nuevoRevista();
        this.regresarAdministrarRevistas();
      }
    }).catch(err => {
      this.utilService.showErrorMessage(err);
    });

  }

  nuevoRevista() {
    this.revista = new Revista('', '', 0, 0);
  }

  actualizarRevistas() {
    this.configuracionAccionService.actualizarListaRevistas(true);
  }

  regresarAdministrarRevistas(): void {
    this.router.navigate(['/revistas']);
  }

}
