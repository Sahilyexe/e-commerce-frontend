import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http:HttpClient) { }

  getProductos(){
    return this.http.get(`${environment.urlservicios}getProductos`)
  }
  getProducto(id:string){
   return this.http.get(`${environment.urlservicios}getProducto/${id}`);
  }
  crearProducto(producto:any){
  return this.http.post(`${environment.urlservicios}crearproducto`,producto)
}
}
