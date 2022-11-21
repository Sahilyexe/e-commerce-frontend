import { Component, Input, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/model/producto';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
 @Input() totalPedido:number= 0;
 @Input() mostrarBoton = true;
  constructor() {
   
   }

  ngOnInit(): void {
    
  }

}
