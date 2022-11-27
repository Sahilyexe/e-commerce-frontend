import { PersonaModel } from './persona';
import { ProductoModel } from './producto';
export class OrdenModel{

    idOrden = "";
    fechaOrden?:any = "";
    idCliente?:string = "";
    metodoPago? = "";
    velocidadEntrega? = "";
    direccionEntrega? = "";
    estado?= "";
    elementos: ProductoModel[]=[];
    persona: PersonaModel= new PersonaModel();
    constructor(){}
}