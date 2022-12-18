import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';
import { ProductosService } from '../../servicios/productos/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';
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
              private _servicioSesion: CarritoService){
              this.activateRoute.params.subscribe(params =>{
              this._servicioProducto.getProducto(params['id']).subscribe(resp=>{
                this.producto = Object.assign(this.producto,resp);
                console.log(this.producto);
              })
            })

               }

  ngOnInit(): void {
    let id=localStorage.getItem('UYHGD%#YDBSJP(#U#UDNDY');
    
    this._servicioSesion.obtenerCarrito(id?.replace(' ','')).subscribe((resp:any)=>{
      this.orden = Object.assign(this.orden,resp);
      
      console.log(this.orden)
    })
  }
  irFinalizarCompra(){
    this.router.navigate(['finalizar-compra'])
  }
  agregarCarrito(){
    this.cargando=true;
    this.orden.elementos.push(this.producto);
    this.orden.estado = "comprando";
    this._servicioSesion.actualizarListaCarrito(JSON.stringify(this.orden)).subscribe(resp=>{
      this.cargando=false;
     
      //this.onPropagar(this.orden)
    })
   }
  //  onPropagar(orden:OrdenModel) {
  //   console.log('entro aqui')
  //   this.propagar.emit(orden);
  // }
  seguirComprando(){
    this.router.navigate(['productos'])
  }
  add(id:ProductoModel){
   
    if(id.cantidadCompra!<id.cantidadStock!){
    this.producto.cantidadCompra=this.producto.cantidadCompra!+1
    }

  }
    
  
  resta(id:ProductoModel){
    if(Number(id.cantidadCompra)!>1){
      this.producto.cantidadCompra=Number(this.producto.cantidadCompra!)-1
    }
  }
}
