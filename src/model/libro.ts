export class Libro {

    public idLibro: string;
    public nombre: string;
    public copias: number;
    public copiasDisponibles: number;

    constructor(idLibro: string, nombre: string, copias: number, copiasDisponibles: number){
        this.idLibro = idLibro,
        this.nombre = nombre,
        this.copias = copias,
        this.copiasDisponibles = copiasDisponibles;
    }
}
