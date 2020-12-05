export class MiembroPersonal{

    public _id: string;
    public nombre: string;
    public copiasLibro: string;
    public copiasRevistas: string;

    constructor(id: string, nombre: string, copiasLibro: string, copiasRevistas: string){
        this._id = id;
        this.nombre = nombre,
        this.copiasLibro = copiasLibro,
        this.copiasRevistas = copiasRevistas;
    }
}