export class MiembroPersonal{

    public _id: string;
    public nombre: string;
    public copiasLibro: number;
    public copiasRevistas: number;

    constructor(id: string, nombre: string, copiasLibro: number, copiasRevistas: number){
        this._id = id;
        this.nombre = nombre,
        this.copiasLibro = copiasLibro,
        this.copiasRevistas = copiasRevistas;
    }
}