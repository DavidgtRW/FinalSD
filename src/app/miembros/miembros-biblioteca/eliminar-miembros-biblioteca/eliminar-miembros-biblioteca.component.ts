import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibliotecaService } from 'src/app/service/biblioteca.service';
import { ConfiguracionAccionsService } from 'src/app/service/configuracion-accions.service';
import { UtilsService } from 'src/app/service/utils.service';
import { MiembroBiblioteca } from 'src/model/miembro-biblioteca';

@Component({
  selector: 'app-eliminar-miembros-biblioteca',
  templateUrl: './eliminar-miembros-biblioteca.component.html',
  styleUrls: ['./eliminar-miembros-biblioteca.component.css']
})
export class EliminarMiembrosBibliotecaComponent implements OnInit {

  miembro: MiembroBiblioteca = new MiembroBiblioteca('', '', '');
  
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
    this.bibliotecaService.deleteServices(`miembros/delete/${this.miembro._id}`)
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
    this.miembro = new MiembroBiblioteca('','', '');
  }

  actualizarMiembros() {
    this.configuracionAccionService.actualizarListaMiembrosBiblioteca(true);
  }

  regresarAdministrarMiembros(): void {
    this.router.navigate(['/miembro-biblioteca']);
  }

}
