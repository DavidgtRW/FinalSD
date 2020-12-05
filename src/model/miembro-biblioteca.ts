export class MiembroBiblioteca{

    public _id: string;
    public nombre: string;
    public copiasLibro: string;

    constructor(id: string, nombre: string, copiasLibro: string){
        this._id = id;
        this.nombre = nombre,
        this.copiasLibro = copiasLibro;
    }
}