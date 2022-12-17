export class Cliente {
    id:number;
    nombre:string;
    apellido:string;
    email:string;
    createAt:string;
    foto:string;

    constructor(id:number, nombre:string, apellido:string, email:string, createAt:string, foto:string){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.createAt=createAt;
        this.foto=foto;
    }
}
