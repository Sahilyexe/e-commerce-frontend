import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoModel } from 'src/app/model/producto';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos:ProductoModel[]= [];
  constructor(private _servicioProducto:ProductosService,
              private router: Router) { 
    this.productos=this._servicioProducto.getProductos();
}
  ngOnInit(): void {
  }
  verProducto(){
    this.router.navigate(['producto']);
  }
  
}
