import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiembrosPersonalComponent } from 'src/app/miembros/miembros-personal/miembros-personal.component';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { MiembroPersonal } from 'src/model/miembro-personal';
import { Revista } from 'src/model/revista';

@Component({
  selector: 'app-reservar-revista',
  templateUrl: './reservar-revista.component.html',
  styleUrls: ['./reservar-revista.component.css']
})
export class ReservarRevistaComponent implements OnInit {

  revistasList: Revista [] = [];

  miembrosPersonalList: MiembroPersonal [] = [];
  
  constructor(
    private utilService: UtilsService,
    private bibliotecaService: BibliotecaService,
    private configuracionAccionService: ConfiguracionAccionsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.cargarMiembrosPersonal();
  }

  prb(){
    
  }

  cargarMiembrosPersonal(){
    this.miembrosPersonalList = [];
    this.bibliotecaService.getServices("personal")
      .then(resultado => {
        console.log("RES:: ", resultado);
        if (resultado) {
          resultado.forEach((element: { _id: string; nombre: string; copiasLibro: string | number; copiasRevistas: string | number;}) => {
            this.miembrosPersonalList.push(new MiembroPersonal(element._id, element.nombre, +element.copiasLibro, +element.copiasRevistas));
          });
        }
      }).catch(err => {
        this.utilService.showErrorMessage(err);
      });
  }

  reservarRevistaPersonal(miembro: MiembroPersonal){
    this.router.navigate([
      '/reservar-revista',
      {
        outlets: {
          outletReservarRevista:
            ['confirmar-revista', miembro._id, miembro.nombre]
        }
      }]);
  }

}
