import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';
import { ProductosService } from '../../servicios/productos/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: ProductoModel= new ProductoModel()
  constructor(private _servicioProducto:ProductosService,
              private activateRoute: ActivatedRoute) {
              this.activateRoute.params.subscribe(params =>{
              
              this.producto = this._servicioProducto.getProducto(params['id'])
            })

               }

  ngOnInit(): void {
  }

}
