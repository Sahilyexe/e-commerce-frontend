export class ProductoModel{

    id?:string = "";
    nombre?:string = "";
    descripcion?:string = "";
    precio?:number = 0;
    cantidadStock?:number = 0;
    cantidadCompra?:number = 1;
    categoria?:string = "";
    fechaIngreso?: string = "";
    imagen: string="";
    constructor(){
        this.cantidadCompra = 1;
        this.cantidadStock = 1;
    }
}