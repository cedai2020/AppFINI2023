import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from '../config/url_servicios';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  constructor(public http: HttpClient) { }

  obtenerProgramaTipoFecha( fecha:any, tipo:any ){
    //console.log(URL_SERVICIOS + "obtener_programa&fecha=" + fecha + "&tipo=" + tipo );
    return this.http.get( URL_SERVICIOS + "obtener_programa&fecha=" + fecha + "&tipo=" + tipo );
  }
}
