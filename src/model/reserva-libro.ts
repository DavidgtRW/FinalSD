export class ReservaLibro {

    public accion: string;
    public id: string;
    public idMiembro: string;

    constructor(accion: string, _idLibro: string, _idMiembro: string){
        this.accion = accion,
        this.id= _idLibro,
        this.idMiembro = _idMiembro;
    }
}
