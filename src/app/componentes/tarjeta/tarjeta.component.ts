import { Component, Input, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';
import { Router } from '@angular/router';
import { OrdenService } from 'src/app/servicios/orden/orden.service';
import { OrdenModel } from 'src/app/model/orden';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
 @Input() producto:ProductoModel=new ProductoModel();
 @Input() orden : OrdenModel = new OrdenModel();
  constructor(private router: Router,
              private _servicioSesion: OrdenService) {}

  ngOnInit(): void {
    
  }
  verProducto(){
    this.router.navigate(['producto',this.producto.id]);
  }
  // agregarCarrito(){
  //   this.orden.elementos.push(new ElementosOrdenModel(
  //    this.producto.nombre!,
  //    this.producto.precio!,
  //    1,
  //    this.producto.categoria!
  //   ))
  //   this._servicioSesion.actualizarListaCarrito(JSON.stringify(this.orden)).subscribe(resp=>{
  //     console.log(resp)
  //   })
  //  }
}
