import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { UtilsService } from './utils.service';

@Injectable({
    providedIn: 'root'
})

export class BibliotecaService {

    //private BASEURL: string = "http://localhost/coordinador/";
    //private BASEURL: string = "http://localhost:8080/coordinador/";
    private BASEURL:string = "http://172.22.4.200/";
    token: string = "";

    constructor(private http: HttpClient,
        private util: UtilsService) { }

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

    getServicesMonitoreo(url: string): Promise<any> {
        return this.http.get(this.BASEURL + url)
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(err => {
                throw err;
            });
    }

    getServicesNotheader(url: string): Promise<any> {
        return this.http.get(this.BASEURL + url)
            .toPromise()
            .then(response => {
                return response;
            })
            .catch(err => {
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
}