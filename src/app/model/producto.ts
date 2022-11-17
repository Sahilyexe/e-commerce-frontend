export class ProductoModel{

    id?:string = "";
    nombre?:string = "";
    descripcion?:string = "";
    precio?:number = 0;
    cantidadStock?:number = 0;
    categoria?:string = "";
    fechaIngreso?: string = "";
    imagen: string="";
    thumbnail: string="";
    constructor(){}
}