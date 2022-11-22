import { PersonaModel } from './persona';
import { ProductoModel } from './producto';
export class OrdenModel{

    idOrden = "";
    fechaOrden? = "";
    idCliente?:string = "";
    metodoPago? = "";
    velocidadEntrega? = "";
    direccionEntrega? = "";
    elementos: ProductoModel[]=[];
    persona: PersonaModel= new PersonaModel();
    constructor(){}
}