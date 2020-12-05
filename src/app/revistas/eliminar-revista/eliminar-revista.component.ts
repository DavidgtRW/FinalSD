import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { Revista } from 'src/model/revista';

@Component({
  selector: 'app-eliminar-revista',
  templateUrl: './eliminar-revista.component.html',
  styleUrls: ['./eliminar-revista.component.css']
})
export class EliminarRevistaComponent implements OnInit {

  revista: Revista = new Revista('', '', 0, 0);

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
       
        this.revista._id = param.id;
        this.revista.nombre = param.nombre;
      }
    });
  }

  eliminarRevista() {
    this.bibliotecaService.deleteServices(`revistas/delete/${this.revista._id}`)
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
    this.configuracionAccionService.actualizarListaLibros(true);
  }

  regresarAdministrarRevistas(): void {
    this.router.navigate(['/revistas']);
  }

}
