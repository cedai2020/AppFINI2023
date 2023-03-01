import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/url_servicios'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  constructor(public http: HttpClient) { }

  buscar_programa(parametroBusqueda:any) {
    return this.http.get(URL_SERVICIOS + "busqueda_programa&busqueda=" + parametroBusqueda)
  }

  buscar_concurso(parametroBusqueda:any) {
    return this.http.get(URL_SERVICIOS + "busqueda_concurso&busqueda=" + parametroBusqueda)
  }

  buscar_artistas(parametroBusqueda:any) {
    return this.http.get(URL_SERVICIOS + "busqueda_artistas&busqueda=" + parametroBusqueda)
  }
}
