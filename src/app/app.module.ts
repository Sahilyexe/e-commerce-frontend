import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { ProductosService } from './servicios/productos/productos.service';
import { CarritoService } from './servicios/carrito/carrito.service';
import { ProductoComponent } from './componentes/producto/producto.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { FinalizarCompraComponent } from './componentes/finalizar-compra/finalizar-compra.component';
import { CarritoDinamicComponent } from './componentes/compartido/carrito-dynamic/carritoDynamic.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { LoadingComponent } from './componentes/compartido/loading/loading.component';
import { AlertComponent } from './componentes/compartido/alert/alert.component';
import { CargandoBotonComponent } from './componentes/compartido/cargando-boton/cargando-boton.component';
import { ResumenComponent } from './componentes/compartido/resumen/resumen.component';
import { NoHayNadaAquiComponent } from './componentes/compartido/no-hay-nada-aqui/no-hay-nada-aqui.component';
import { CrearProductosComponent } from './componentes/admin/crear-productos/crear-productos.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Amplify, Auth } from 'aws-amplify';

import awsconfig from './aws-exports';
import { TableroComponent } from './componentes/admin/tablero/tablero.component';

Amplify.configure(awsconfig);

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
    LoadingComponent,
    CargandoBotonComponent,
    ResumenComponent,
    NoHayNadaAquiComponent,
    CrearProductosComponent,
    TableroComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
