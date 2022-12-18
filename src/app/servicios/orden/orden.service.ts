
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private http: HttpClient) 
              {
    console.log('se levanta el servicio')
   }
  
 crearOrden(orden:any){
  console.log(orden)
  return this.http.post(`${environment.urlstatemashine}Comprar`,orden)
 }
}
