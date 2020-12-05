import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { Revista } from 'src/model/revista';

@Component({
  selector: 'app-consultar-revista',
  templateUrl: './consultar-revista.component.html',
  styleUrls: ['./consultar-revista.component.css']
})
export class ConsultarRevistaComponent implements OnInit {

  revista: Revista = new Revista('', '', 0, 0);
  
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
       
        this.revista._id = param.id;

        this.cargarInfoRevista(this.revista._id);
      }
    });
  }

  cargarInfoRevista(id: string){
    this.bibliotecaService.getServices(`revistas/edit/${id}`)
      .then(resultado => {
        console.log("RES:: ", resultado);
        if (resultado) {
          this.revista.nombre = resultado.nombre;
          this.revista.copias = resultado.copias;
          this.revista.copiasDisponibles = resultado.copiasDisponibles;
        }
      }).catch(err => {
        this.utilService.showErrorMessage(err);
      });
  }

}
