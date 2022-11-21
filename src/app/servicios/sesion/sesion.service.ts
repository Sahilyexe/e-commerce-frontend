
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdenModel } from 'src/app/model/orden';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(private http: HttpClient) 
              {
    console.log('se levanta el servicio')
   }
  
 crearSesion(sesion:any){
  const headers = new HttpHeaders();
  headers.append('Access-Control-Allow-Origin','*').append('Access-Control-Allow-Methods','OPTIONS')
  return this.http.post(`${environment.url}crearsesion`,sesion,{headers:headers})
 }
}
