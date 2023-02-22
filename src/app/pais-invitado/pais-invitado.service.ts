import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {URL_SERVICIOS} from '../config/url_servicios';

@Injectable({
  providedIn: 'root'
})
export class PaisInvitadoService {

  constructor(public http: HttpClient) { }

  obtenerPaisInvitado() {
    return this.http.get(URL_SERVICIOS + "obtener_pais");
  }

}
