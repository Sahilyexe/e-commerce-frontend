
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) 
              {
    console.log('se levanta el servicio')
   }
  
 actualizarListaCarrito(sesion:any){
  const headers = new HttpHeaders();
  console.log('sesion'+sesion)
  headers.append('Access-Control-Allow-Origin','*').append('Access-Control-Allow-Methods','OPTIONS')
  return this.http.post(`${environment.urlservicios}crearsesion`,sesion,{headers:headers})
 }
 obtenerCarrito(id:any){
  const headers = new HttpHeaders();
  headers.append('Access-Control-Allow-Origin','*').append('Access-Control-Allow-Methods','OPTIONS')
  return this.http.get(`${environment.urlservicios}obtenerOrden/${id}`,{headers:headers})
 }
}
