import { Component, Input, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/servicios/sesion/sesion.service';
import { OrdenModel } from 'src/app/model/orden';
import { ElementosOrdenModel } from 'src/app/model/elementosOrden';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
 @Input() producto:ProductoModel=new ProductoModel();
 @Input() orden : OrdenModel = new OrdenModel();
  constructor(private router: Router,
              private _servicioSesion: SesionService) {}

  ngOnInit(): void {
    
  }
  verProducto(){
    this.router.navigate(['producto',this.producto.id]);
  }
  agregarCarrito(){
   this.orden.elementos.push(new ElementosOrdenModel(
    this.producto.nombre!,
    this.producto.precio!,
    1,
    this.producto.categoria!
   ))
   this._servicioSesion.crearSesion(JSON.stringify(this.orden)).subscribe(resp=>{
     console.log(resp)
   })
  }
}
