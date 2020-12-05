import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfiguracionAccionsService {

  private actualizarLibros = new BehaviorSubject(false);
  private actualizarRevistas = new BehaviorSubject(false);
  private actualizarMiembrosBiblioteca = new BehaviorSubject(false);
  private actualizarMiembrosPersonal = new BehaviorSubject(false);

  libroActual: Observable<boolean> = this.actualizarLibros.asObservable();
  revistaActual: Observable<boolean> = this.actualizarRevistas.asObservable();
  miembroBibliotecaActual: Observable<boolean> = this.actualizarMiembrosBiblioteca.asObservable();
  miembroPersonalActual: Observable<boolean> = this.actualizarMiembrosPersonal.asObservable();

  constructor() { }

  actualizarListaLibros(mensage: boolean) {
    this.actualizarLibros.next(mensage);
  }

  actualizarListaRevistas(mensage: boolean) {
    this.actualizarRevistas.next(mensage);
  }

  actualizarListaMiembrosBiblioteca(mensage: boolean) {
    this.actualizarMiembrosBiblioteca.next(mensage);
  }

  actualizarListaMiembrosPersonal(mensage: boolean) {
    this.actualizarMiembrosPersonal.next(mensage);
  }
}
