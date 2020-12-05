import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';
import { Observable, throwError, Subject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Libro } from 'src/model/libro';
import { UtilsService } from './utils.service';
@Injectable({
    providedIn: 'root'
})

export class BibliotecaService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    //private BASEURL: string = "http://localhost/coordinador/";
    //private BASEURL: string = "http://localhost:8080/coordinador/";
    private BASEURL: string = 'http://localhost:4000/';
    token: string = "";
    private showPanelSubject = new Subject<any>();

    constructor(private http: HttpClient,
        private util: UtilsService) { }

    obtenerNotas() {
        this.http.get('http://localhost:4000/libros', { observe: 'response' })
            .subscribe(response => {   // data is of type HttpResponse<Object>
                console.log(response.headers.get('X-Custom-Header'));
                console.log(response.body); //response.body is a JSON
            });

    }

    getServices(url: string): Promise<any> {
        this.util.showLoading();
        return this.http.get(this.BASEURL + url)
            .toPromise()
            .then(response => {
                this.util.hideLoading();
                return response;
            })
            .catch(err => {
                this.util.hideLoading();
                throw err;
            });
    }

    postServices(url: string, data: any): Promise<any> {
        this.util.showLoading();
        return this.http.post(this.BASEURL + url, data)
            .toPromise()
            .then(response => {
                this.util.hideLoading();
                return response;
            })
            .catch(err => {
                this.util.hideLoading();
                throw err;
            });
    }

    putServices(url: string, data: any): Promise<any> {
        console.log('WSLib',this.BASEURL + url, data);
        this.util.showLoading();
        return this.http.put(this.BASEURL + url, data)
            .toPromise()
            .then(response => {
                this.util.hideLoading();
                return response;
            })
            .catch(err => {
                this.util.hideLoading();
                throw err;
            });
    }

    deleteServices(url: string): Promise<any> {
        this.util.showLoading();
        return this.http.delete(this.BASEURL + url)
            .toPromise()
            .then(response => {
                this.util.hideLoading();
                return response;
            })
            .catch(err => {
                this.util.hideLoading();
                throw err;
            });
    }

    actualizar() {
        this.http.post('http://localhost:4000/libros/new-libro', new Libro('null', 'hola primera parte', 3, 3)).subscribe();

        console.log("actualizo");
    }

    






}