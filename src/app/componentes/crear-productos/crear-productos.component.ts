import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {
 producto: ProductoModel = new ProductoModel()
  constructor() { }

  ngOnInit(): void {
  }

}
