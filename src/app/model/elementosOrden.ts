export class ElementosOrdenModel{

    nombre?:string = "";
    precio?:number = 0;
    cantidad?:number = 0;
    categoria?:string = "";
    constructor(nombre:string,precio:number, cantidad:number, categoria: string){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}