import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { Revista } from 'src/model/revista';
import { ReservaLibro } from 'src/model/reserva-libro';

@Component({
  selector: 'app-confirmar-revista',
  templateUrl: './confirmar-revista.component.html',
  styleUrls: ['./confirmar-revista.component.css']
})
export class ConfirmarRevistaComponent implements OnInit {

  revistasList: Revista [] = [];
  reservaLibro: ReservaLibro = new ReservaLibro('2', '', '');
  nombreMiembro: string = '';
  
  constructor(
    private utilService: UtilsService,
    private bibliotecaService: BibliotecaService,
    private configuracionAccionService: ConfiguracionAccionsService,
    private router: Router,
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.cargarRevistas();
    this.activedRoute.params.subscribe(param => {
      if ("id" in param && "nombre") {

        this.reservaLibro.idMiembro = param.id;
        this.nombreMiembro = param.nombre;

      }
    });
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

  prb(){
    
  }

  reservarRevista(revista: Revista){
    this.regresarAdministrarMiembros();

  }

  regresarAdministrarMiembros(){
    this.router.navigate(['/reservar-revista']);
  }
}
