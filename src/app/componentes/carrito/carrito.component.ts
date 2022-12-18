import { Component, OnInit } from '@angular/core';
import { OrdenModel } from 'src/app/model/orden';
import { ProductoModel } from 'src/app/model/producto';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
 orden = new OrdenModel();
 producto : ProductoModel= new ProductoModel();
 productos: ProductoModel[]=[]
 total:number = 0;
 cargando:boolean = false;
  constructor(private _servicioCarrito: CarritoService) {
    this.cargando=true;
    let key = localStorage.getItem('UYHGD%#YDBSJP(#U#UDNDY')
     this._servicioCarrito.obtenerCarrito(key?.replace(' ','')).subscribe((resp:any) =>{
      this.orden = Object.assign(this.orden,resp);   
            //  console.log('carrito: '+this.orden)
          this.calcularTotalResumen()
          this.cargando= false;
     })
   }

  ngOnInit(): void {
  }
 
  EliminarCarrito(id:ProductoModel){
    this.cargando=true;
    this.orden.elementos.splice(this.orden.elementos.indexOf(id),1)
    if(this.orden.elementos.length==0){
      this.orden.estado="mirando"
    }
    this._servicioCarrito.actualizarListaCarrito(JSON.stringify(this.orden)).subscribe(resp=>{
        this.calcularTotalResumen();
        this.cargando=false;
    })
   }
   actualizar(){
    this.cargando=true;
    this._servicioCarrito.actualizarListaCarrito(JSON.stringify(this.orden)).subscribe(resp=>{
      this.cargando=false;
    })
  }
  add(id:ProductoModel){
   
    if(id.cantidadCompra!<id.cantidadStock!){
    this.orden.elementos[this.orden.elementos.indexOf(id)].cantidadCompra=this.orden.elementos[this.orden.elementos.indexOf(id)].cantidadCompra!+1
   const a=document.getElementById('cantidadCompraCarrito'); 
   a?.dispatchEvent(new Event("change"))
   this.calcularTotalResumen();

  }
    
  }
  resta(id:ProductoModel){
    if(id.cantidadCompra!>1){
    this.orden.elementos[this.orden.elementos.indexOf(id)].cantidadCompra=this.orden.elementos[this.orden.elementos.indexOf(id)].cantidadCompra!-1
    const a=document.getElementById('cantidadCompraCarrito'); 
    a?.dispatchEvent(new Event("change"))
    this.calcularTotalResumen();
  }
  }
  calcularTotalResumen(){
    this.total=0
    this.orden.elementos.forEach((elemento=>{
      this.total = this.total+ (Number(elemento.precio!)*Number(elemento.cantidadCompra!))
      console.log(this.total)
    
      
   }))
  }
}
