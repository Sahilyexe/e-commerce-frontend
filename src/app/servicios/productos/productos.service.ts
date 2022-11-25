import { Injectable } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';
import * as productosJson from '../../../assets/productos.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  producto = new ProductoModel();
  productos:ProductoModel [] =[];
  constructor( private http:HttpClient) { }

  getProductos(){
    return this.http.get(`${environment.url}getProductos`)
  }
  getProducto(id:string){
    // this.getProductos();
    // let producto :ProductoModel=new ProductoModel();
    //  for( let i= 0; i< this.productos.length;i++){
    //      producto= this.productos[i];
    //      if(producto.id == id){
    //       return producto;
    //     } 
    //  }
   return this.http.get(`${environment.url}getProducto/${id}`);
  }
crearProducto(producto:any){
   const headers = new HttpHeaders();
   headers.append('Content-Type','multipart/form-data')
  return this.http.post(`${environment.url}crearproducto`,producto/*,{headers: headers}*/)
}
}
