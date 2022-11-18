import {ElementosOrdenModel} from './elementosOrden';
export class OrdenModel{

    idOrden = "";
    fechaOrden? = "";
    idCliente?:string = "";
    metodoPago? = "";
    velocidadEntrega? = "";
    direccionEntrega? = "";
    elementos: ElementosOrdenModel[]=[];
    constructor(){}
}