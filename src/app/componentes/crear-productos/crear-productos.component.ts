import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {
 producto: ProductoModel = new ProductoModel()
  constructor(private _servicioProducto:ProductosService) { }

  ngOnInit(): void {
  }
  crearProducto(){
  this._servicioProducto.crearProducto(JSON.stringify(this.producto)).subscribe(resp=>{
    console.log(resp)
  })
  }
}
