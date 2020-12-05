import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { MiembroPersonal } from 'src/model/miembro-personal';

@Component({
  selector: 'app-crear-miembros-personal',
  templateUrl: './crear-miembros-personal.component.html',
  styleUrls: ['./crear-miembros-personal.component.css']
})
export class CrearMiembrosPersonalComponent implements OnInit {

  miembro: MiembroPersonal = new MiembroPersonal('', '', '', '');

  constructor(
    private utilService: UtilsService,
    private bibliotecaService: BibliotecaService,
    private configuracionAccionService: ConfiguracionAccionsService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  prb(){
    
  }

  guardarMiembro() {
    this.bibliotecaService.postServices('personal/new-personal', this.miembro)
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
    this.miembro = new MiembroPersonal('', '', '', '');
  }

  actualizarMiembros() {
    this.configuracionAccionService.actualizarListaMiembrosPersonal(true);
  }

  regresarAdministrarMiembros(): void {
    this.router.navigate(['/miembro-personal']);
  }


}
