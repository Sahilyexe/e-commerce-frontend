import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  cantidadArticulos:number=1;
  constructor(private router:Router) {}
  
  ngOnInit(): void {
  }
  verCarrito(){
  this.router.navigate(['carrito'])
  }
}
