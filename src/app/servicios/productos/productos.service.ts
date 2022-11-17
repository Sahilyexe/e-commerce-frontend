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
    console.log(this.productos)
    this.productos = Object.assign(this.productos,productosJson)
    return this.productos;
  }

}
