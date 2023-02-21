import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from '../config/url_servicios';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  constructor(public http: HttpClient) { }

  obtenerNosotros(){
    //console.log(URL_SERVICIOS + "obtener_nosotros");
    return this.http.get( URL_SERVICIOS + "obtener_nosotros" );
  }
}
