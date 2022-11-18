import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos:ProductoModel[] = [];
 // producto: ProductoModel= new ProductoModel();
  
  constructor(private _servicioProducto:ProductosService) { 
    this.productos=this._servicioProducto.getProductos();
}
  ngOnInit(): void {
  }
 
  
}
