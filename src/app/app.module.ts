import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';

import { ProductosService } from './servicios/productos/productos.service';
import { SesionService } from './servicios/sesion/sesion.service';
import { ProductoComponent } from './componentes/producto/producto.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { FinalizarCompraComponent } from './componentes/finalizar-compra/finalizar-compra.component';
import { CarritoDinamicComponent } from './componentes/carrito-dynamic/carrito.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { AlertComponent } from './componentes/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    ProductoComponent,
    NavegacionComponent,
    ListaProductosComponent,
    FinalizarCompraComponent,
    CarritoDinamicComponent,
    CarritoComponent,
    AlertComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
