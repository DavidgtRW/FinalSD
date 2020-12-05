import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { MiembroPersonal } from 'src/model/miembro-personal';

@Component({
  selector: 'app-eliminar-miembros-personal',
  templateUrl: './eliminar-miembros-personal.component.html',
  styleUrls: ['./eliminar-miembros-personal.component.css']
})
export class EliminarMiembrosPersonalComponent implements OnInit {

  miembro: MiembroPersonal = new MiembroPersonal('', '', '', '');
  
  constructor(
    private utilService: UtilsService,
    private bibliotecaService: BibliotecaService,
    private activedRoute: ActivatedRoute,
    private configuracionAccionService: ConfiguracionAccionsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.activedRoute.params.subscribe(param => {
      if ("id" in param && "nombre") {
       
        this.miembro._id = param.id;
        this.miembro.nombre = param.nombre;
      }
    });
  }

  eliminarMiembro() {
    this.bibliotecaService.deleteServices(`personal/delete/${this.miembro._id}`)
    .then(resultado => {
      console.log("RES2:: ", resultado);
      if(resultado){
        console.log("RES3:: ");
        this.actualizarMiembros();
        this.nuevoMiembro();
        this.regresarAdministrarMiembros();
      }
    }).catch(err => {
      this.utilService.showErrorMessage(err);
    });

  }

  nuevoMiembro() {
    this.miembro = new MiembroPersonal('','', '', '');
  }

  actualizarMiembros() {
    this.configuracionAccionService.actualizarListaMiembrosPersonal(true);
  }

  regresarAdministrarMiembros(): void {
    this.router.navigate(['/miembro-personal']);
  }

}
