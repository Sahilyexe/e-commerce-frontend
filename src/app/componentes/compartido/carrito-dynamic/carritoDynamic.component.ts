import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-dynamic',
  templateUrl: './carritoDynamic.component.html',
  styleUrls: ['./carritoDynamic.component.css']
})
export class CarritoDinamicComponent implements OnInit {
  cantidadArticulos:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
