import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';
import { ProductosService } from '../../servicios/productos/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenService } from 'src/app/servicios/orden/orden.service';
import { OrdenModel } from 'src/app/model/orden';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  // @Output()
  // propagar = new EventEmitter<OrdenModel>();

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
    this.orden.elementos.push(this.producto)
    this._servicioSesion.actualizarListaCarrito(JSON.stringify(this.orden)).subscribe(resp=>{
      this.cargando=false;
      //this.onPropagar(this.orden)
    })
   }
  //  onPropagar(orden:OrdenModel) {
  //   console.log('entro aqui')
  //   this.propagar.emit(orden);
  // }
}
