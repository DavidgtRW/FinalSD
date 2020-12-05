export class MiembroBiblioteca{

    public _id: string;
    public nombre: string;
    public copiasLibro: number;

    constructor(id: string, nombre: string, copiasLibro: number){
        this._id = id;
        this.nombre = nombre,
        this.copiasLibro = copiasLibro;
    }
}