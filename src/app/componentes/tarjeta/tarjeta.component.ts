import { Component, Input, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
 @Input() producto:ProductoModel=new ProductoModel();
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  verProducto(){
    this.router.navigate(['producto',this.producto.id]);
  }
}
