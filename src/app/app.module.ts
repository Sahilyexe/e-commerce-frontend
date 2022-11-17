import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';

import { ProductosService } from './servicios/productos/productos.service';
import { ProductoComponent } from './componentes/producto/producto.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    ProductoComponent,
    NavegacionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
