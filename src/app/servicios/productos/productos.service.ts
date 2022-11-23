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
    this.productos = Object.assign(this.productos,productosJson)
    return this.productos;
  }
  getProducto(id:string){
    this.getProductos();
    let producto :ProductoModel=new ProductoModel();
     for( let i= 0; i< this.productos.length;i++){
         producto= this.productos[i];
         if(producto.id == id){
          return producto;
        } 
     }
   return producto;
  }
crearProducto(producto:any){
  const headers = new HttpHeaders();
  headers.append('Access-Control-Allow-Origin','*').append('Access-Control-Allow-Methods','OPTIONS')
  return this.http.post(`${environment.url}crearproducto`,producto,{headers: headers})
}
}
