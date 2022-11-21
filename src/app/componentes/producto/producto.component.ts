import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';
import { ProductosService } from '../../servicios/productos/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenService } from 'src/app/servicios/orden/orden.service';
import { ElementosOrdenModel } from 'src/app/model/elementosOrden';
import { OrdenModel } from 'src/app/model/orden';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: ProductoModel= new ProductoModel()
  cargando: boolean = false;
  orden: OrdenModel = new OrdenModel();
  constructor(private _servicioProducto:ProductosService,
              private activateRoute: ActivatedRoute,
              private router:Router,
              private _servicioSesion: OrdenService){
              this.activateRoute.params.subscribe(params =>{
              this.producto = this._servicioProducto.getProducto(params['id'])
            })

               }

  ngOnInit(): void {
    let id=sessionStorage.getItem('UYHGD%#YDBSJP(#U#UDNDY');
    this._servicioSesion.obtenerCarrito(id?.replace(' ','')).subscribe((resp:any)=>{
      this.orden=Object.assign(this.orden,resp['orden'])
     
    })
  }
  irFinalizarCompra(){
    this.router.navigate(['finalizar-compra'])
  }
  agregarCarrito(){
    this.cargando=true;
    this.orden.elementos.push(new ElementosOrdenModel(
     this.producto.nombre!,
     this.producto.precio!,
     1,
     this.producto.categoria!
    ))
    this._servicioSesion.actualizarListaCarrito(JSON.stringify(this.orden)).subscribe(resp=>{
      console.log(resp)
      this.cargando=false;
    })
   }

}
