import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  cantidadArticulos:number=0;
  constructor(private router:Router,public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }
  
  ngOnInit(): void {
  }
  verCarrito(){
  this.router.navigate(['carrito'])
  }
}
