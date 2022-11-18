import { Injectable } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';
import * as productosJson from '../../../assets/productos.json';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  producto = new ProductoModel();
  productos:ProductoModel [] =[];
  constructor() { }

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

}
