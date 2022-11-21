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
   let sesion =  sessionStorage.getItem('UYHGD%#YDBSJP(#U#UDNDY')
  if(sesion == null || sesion == undefined || sesion == '') {
      this.orden.idOrden=this.generarAleatorio();
      this._servicioSesion.crearSesion(JSON.stringify(this.orden)).subscribe(resp =>{
      this.orden = Object.assign(resp)
      sessionStorage.setItem('UYHGD%#YDBSJP(#U#UDNDY',this.orden.idOrden)
     })
  }
     
  }
 
  generarAleatorio(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 100; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;

 }
  
}
