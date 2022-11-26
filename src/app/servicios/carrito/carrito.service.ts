
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
  headers.append('Access-Control-Allow-Origin','*').append('Access-Control-Allow-Methods','OPTIONS')
  return this.http.post(`${environment.url}crearsesion`,sesion,{headers:headers})
 }
 obtenerCarrito(id:any){
  const headers = new HttpHeaders();
  headers.append('Access-Control-Allow-Origin','*').append('Access-Control-Allow-Methods','OPTIONS')
  return this.http.get(`${environment.url}obtenerOrden/${id}`,{headers:headers})
 }
}
