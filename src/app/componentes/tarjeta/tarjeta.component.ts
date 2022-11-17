import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';
import { ProductosService } from '../../servicios/productos/productos.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  productos:ProductoModel[]= [];
  constructor(private _servicioProducto:ProductosService) { 
    this.productos=this._servicioProducto.getProductos();
  }

  ngOnInit(): void {
    
  }
  
}
