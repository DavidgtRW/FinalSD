export class Revista {

    public idRevista: string;
    public nombre: string;
    public copias: number;
    public copiasDisponibles: number;

    constructor(idRevista: string, nombre: string, copias: number, copiasDisponibles: number){
        this.idRevista = idRevista,
        this.nombre = nombre;
        this.copias = copias,
        this.copiasDisponibles = copiasDisponibles;
    }

}
