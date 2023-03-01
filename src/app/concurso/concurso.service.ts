import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from "../config/url_servicios";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConcursoService {

  constructor(public http: HttpClient) { }

  obtenerConcurso( tipoConcurso:any ){
    //console.log(URL_SERVICIOS + "obtener_concurso&tipo=" + tipoConcurso );
    return this.http.get( URL_SERVICIOS + "obtener_concurso&tipo=" + tipoConcurso);
  }

  obtenerImagenesConcursante( idconcurso:any ){
    //console.log(URL_SERVICIOS + "obtener_imagenes_concursante&idconcurso=" + idconcurso );
    return this.http.get( URL_SERVICIOS + "obtener_imagenes_concursante&idconcurso=" + idconcurso );
  }
}
