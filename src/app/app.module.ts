import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';
import { FormsModule } from '@angular/forms';

import { ProductosService } from './servicios/productos/productos.service';
import { ProductoComponent } from './componentes/producto/producto.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    ProductoComponent,
    NavegacionComponent,
    ListaProductosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
