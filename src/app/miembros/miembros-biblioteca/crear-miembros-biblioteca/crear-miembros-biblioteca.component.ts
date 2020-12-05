import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { MiembroBiblioteca } from 'src/model/miembro-biblioteca';

@Component({
  selector: 'app-crear-miembros-biblioteca',
  templateUrl: './crear-miembros-biblioteca.component.html',
  styleUrls: ['./crear-miembros-biblioteca.component.css']
})
export class CrearMiembrosBibliotecaComponent implements OnInit{

  miembro: MiembroBiblioteca = new MiembroBiblioteca('', '', 0);

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
    this.bibliotecaService.postServices('miembros/new-miembro', this.miembro)
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
    this.miembro = new MiembroBiblioteca('','', 0);
  }

  actualizarMiembros() {
    this.configuracionAccionService.actualizarListaMiembrosBiblioteca(true);
  }

  regresarAdministrarMiembros(): void {
    this.router.navigate(['/miembro-biblioteca']);
  }

}
