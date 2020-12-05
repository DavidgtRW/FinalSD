import { Injectable, } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  lastUrl: string = '';
  private showPanelSubject = new Subject<any>();

  expresionesReg: any = {
    email: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$",
    numeros: "^[0-9]+$",
    soloTexto: "^[a-zA-Z ]*$",
    textoNumeros: "^[0-9a-zA-Z]+$",
    ip: "^(localhost|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))?$",
  }

  constructor() { }

  showLoading() {
    let loading = document.getElementsByClassName("background-loading") as HTMLCollectionOf<HTMLElement>;
    loading[0].style.display = "block"
  }

  hideLoading() {
    let loading = document.getElementsByClassName("background-loading") as HTMLCollectionOf<HTMLElement>;
    loading[0].style.display = "none"
  }

  setUrl(url: string) {
    this.lastUrl = url;
  }

  getUrl(): string {
    return this.lastUrl;
  }

  messageShow(message: string, modal: any, state: string) {
    let infoModal = {
      message,
      modal,
      state
    }
    this.showPanelSubject.next(infoModal);
  }

  showErrorMessage(err: any) {
    if (err.error.respuesta) {
      this.messageShow(err.error.respuesta, "messageGeneral", "error");
    } else if(err.error.errorMessage){
      this.messageShow(err.error.errorMessage, "messageGeneral", "error");
    }else{
      this.messageShow("Ocurrió un error de conexión", "messageGeneral", "error");
    }
  }

  

}