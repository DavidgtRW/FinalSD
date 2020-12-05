export class Libro {

    public _id: string;
    public nombre: string;
    public copias: number;
    public copiasDisponibles: number;

    constructor(id: string, nombre: string, copias: number, copiasDisponibles: number){
        this._id = id,
        this.nombre = nombre,
        this.copias = copias,
        this.copiasDisponibles = copiasDisponibles;
    }
}
