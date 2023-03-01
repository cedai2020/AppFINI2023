import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { URL_SERVICIOS } from '../config/url_servicios';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  constructor(public http: HttpClient) { }

  obtenerArtistas() {
    return this.http.get(URL_SERVICIOS + "obtener_artistas")
  }
}
