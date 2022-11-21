import { Component, OnInit } from '@angular/core';
import { OrdenModel } from 'src/app/model/orden';
import { ProductoModel } from 'src/app/model/producto';
import { OrdenService } from 'src/app/servicios/orden/orden.service';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})
export class FinalizarCompraComponent implements OnInit {
  orden = new OrdenModel();
  producto : ProductoModel= new ProductoModel();
  productos: ProductoModel[]=[]
  total:number = 0;
  constructor(private _servicioCarrito: OrdenService) {
    let key = sessionStorage.getItem('UYHGD%#YDBSJP(#U#UDNDY')
    this._servicioCarrito.obtenerCarrito(key?.replace(' ','')).subscribe((resp:any) =>{
         this.orden = Object.assign(this.orden,resp['orden'])
         this.orden.elementos.forEach((elemento=>{
            this.total = this.total+ Number(elemento.precio!)
            console.log(this.total)
         }))
    })
   }

  ngOnInit(): void {
  }

}
