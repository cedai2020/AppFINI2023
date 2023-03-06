import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ConcursoService } from 'src/app/concurso/concurso.service';
import { URL_ASSETS_CONCURSO } from 'src/app/config/url_servicios';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  tipoConcurso:any
  datos:any
  imagenesConcursante:any
  url:any

  constructor(private route: ActivatedRoute, private ws: ConcursoService) { 
    this.url = URL_ASSETS_CONCURSO

    this.route.queryParams.subscribe(params => {
      if(params){
        this.tipoConcurso = JSON.parse(params['tipoConcurso'])
        this.datos = JSON.parse(params['concursante'])

        this.ws.obtenerImagenesConcursante(this.datos.idconcurso).subscribe((data) => {
          this.imagenesConcursante = data
        },
        (error) => {console.log(error)}
        )
      }
    })
  }

  ngOnInit() {
  }

}
