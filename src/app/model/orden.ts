import { ProductoModel } from './producto';
export class OrdenModel{

    idOrden = "";
    fechaOrden? = "";
    idCliente?:string = "";
    metodoPago? = "";
    velocidadEntrega? = "";
    direccionEntrega? = "";
    elementos: ProductoModel[]=[];
    constructor(){}
}