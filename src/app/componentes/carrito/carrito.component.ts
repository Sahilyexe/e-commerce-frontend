import { Component, OnInit } from '@angular/core';
import { OrdenModel } from 'src/app/model/orden';
import { ProductoModel } from 'src/app/model/producto';
import { OrdenService } from 'src/app/servicios/orden/orden.service';

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
  constructor(private _servicioCarrito: OrdenService) {
    this.cargando=true;
    let key = sessionStorage.getItem('UYHGD%#YDBSJP(#U#UDNDY')
     this._servicioCarrito.obtenerCarrito(key?.replace(' ','')).subscribe((resp:any) =>{
          this.orden = Object.assign(this.orden,resp['orden'])
          this.orden.elementos.forEach((elemento=>{
             this.total = this.total+ Number(elemento.precio!)
             console.log(this.total)
           
             
          }))
          this.cargando= false;
     })
   }

  ngOnInit(): void {
   
  }
  EliminarCarrito(id:ProductoModel){
    this.cargando=true;
    console.log(this.orden.elementos)
    this.orden.elementos.splice(this.orden.elementos.indexOf(id),1)
    console.log(this.orden.elementos)
    this._servicioCarrito.actualizarListaCarrito(JSON.stringify(this.orden)).subscribe(resp=>{
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

  }
    
  }
  resta(id:ProductoModel){
    if(id.cantidadCompra!>1){
    this.orden.elementos[this.orden.elementos.indexOf(id)].cantidadCompra=this.orden.elementos[this.orden.elementos.indexOf(id)].cantidadCompra!-1
    const a=document.getElementById('cantidadCompraCarrito'); 
    a?.dispatchEvent(new Event("change"))
   
  }
  }
}
