import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-dynamic',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoDinamicComponent implements OnInit {
  cantidadArticulos:number=1;
  constructor() { }

  ngOnInit(): void {
  }

}
