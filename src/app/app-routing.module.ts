import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizarCompraComponent } from './componentes/finalizar-compra/finalizar-compra.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

const routes: Routes = [
  {path: 'producto/:id', component :ProductoComponent},
  {path: 'productos', component: ListaProductosComponent},
  {path: '', redirectTo: 'productos', pathMatch: 'full' },
  {path: 'finalizar-compra', component: FinalizarCompraComponent},
  {path: 'carrito', component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
