import { Component, OnInit } from '@angular/core';
import { OrdenModel } from 'src/app/model/orden';
import { ProductoModel } from 'src/app/model/producto';
import { ProductosService } from 'src/app/servicios/productos/productos.service';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos:ProductoModel[] = [];
  orden: OrdenModel = new OrdenModel();
  cargando: boolean = false;
 // producto: ProductoModel= new ProductoModel();
  
  constructor(private _servicioProducto:ProductosService,
              private _servicioSesion: CarritoService) { 
                this.cargando= true;
   this._servicioProducto.getProductos().subscribe(resp=>{
    this.productos=Object.assign(this.productos,resp)
    this.cargando = false;
    // console.log(resp)
    });
}
  ngOnInit(): void {
   let sesion =  localStorage.getItem('UYHGD%#YDBSJP(#U#UDNDY')
  if(sesion == null || sesion == undefined || sesion == '') {
      this.orden.idOrden=this.generarIDOrden().replace(' ','');
      this.orden.estado ="mirando"
      this._servicioSesion.actualizarListaCarrito(JSON.stringify(this.orden)).subscribe(resp =>{
      this.orden = Object.assign(resp)
      localStorage.setItem('UYHGD%#YDBSJP(#U#UDNDY',this.orden.idOrden)
     })
  }
  }
 
  generarIDOrden(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 100; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
 
    // return result1;
    let fecha= new Date();
    return 'Orden-'+
            fecha.getFullYear()+
            '-'+
            fecha.getMonth()+
            '-'+
            fecha.getDay()+
            '-'+
            fecha.getHours()+
            '-'+
            fecha.getMinutes()

 }
  
}
