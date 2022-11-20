import { Component, OnInit } from '@angular/core';
import { OrdenModel } from 'src/app/model/orden';
import { ProductoModel } from 'src/app/model/producto';
import { SesionModel } from 'src/app/model/sesionModel';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { SesionService } from 'src/app/servicios/sesion/sesion.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos:ProductoModel[] = [];
  orden: OrdenModel = new OrdenModel();
 // producto: ProductoModel= new ProductoModel();
  
  constructor(private _servicioProducto:ProductosService,
              private _servicioSesion: SesionService) { 
    this.productos=this._servicioProducto.getProductos();
}
  ngOnInit(): void {
    this._servicioSesion.crearSesion(this.orden).subscribe(resp =>{

     //let respuestaArray:SesionModel = Object.assign(resp)
     console.log(resp)
     //sessionStorage.setItem('UYHGD%#YDBSJP(#U#UDNDY',respuestaArray.id!)
    },error=>{console.log(error.message)})
   
  }
 
  
}
