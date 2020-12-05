import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { MiembroBiblioteca } from 'src/model/miembro-biblioteca';

@Component({
  selector: 'app-miembros-biblioteca',
  templateUrl: './miembros-biblioteca.component.html',
  styleUrls: ['./miembros-biblioteca.component.css']
})
export class MiembrosBibliotecaComponent implements OnInit, OnDestroy  {

  miembrosList: MiembroBiblioteca [] = [];
  private suscripcion: Subscription = new Subscription();

  constructor(
    private utilService: UtilsService,
    private bibliotecaService: BibliotecaService,
    private configuracionAccionService: ConfiguracionAccionsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarMiembrosBiblioteca();
    this.suscripcion = this.configuracionAccionService.miembroBibliotecaActual.subscribe((result) => {
      console.log(result);
      if (result) {
        this.cargarMiembrosBiblioteca();
        this.configuracionAccionService.actualizarListaMiembrosBiblioteca(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  cargarMiembrosBiblioteca(){
    this.miembrosList = [];
    this.bibliotecaService.getServices("miembros")
      .then(resultado => {
        console.log("RES:: ", resultado);
        if (resultado) {
          resultado.forEach((element: { _id: string; nombre: string; copiasLibro: string | number; }) => {
            this.miembrosList.push(new MiembroBiblioteca(element._id, element.nombre, +element.copiasLibro));
          });
        }
      }).catch(err => {
        this.utilService.showErrorMessage(err);
      });
  }

  eliminarMiembroBiblioteca(miembro: MiembroBiblioteca){
    this.router.navigate([
      '/miembro-biblioteca',
      {
        outlets: {
          outletEliminarMiembrosBiblioteca:
            ['eliminar-revista', miembro._id, miembro.nombre]
        }
      }]);
  }

  prb(){
    
  }

}
