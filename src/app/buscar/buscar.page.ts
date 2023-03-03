import { Component, OnInit } from '@angular/core';
import { BuscarService } from './buscar.service';
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { URL_ASSETS_ARTISTAS } from '../config/url_servicios';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  tipoBusqueda:any
  inputValue:any
  divdata:any
  divdataprograma:any
  divdataconcurso:any
  divdataartistas:any
  divinvisible:any
  programas:any
  concursos:any
  artistas:any
  url:any

  constructor(private router: Router, private ws: BuscarService) { }

  ionViewWillEnter() {
    this.url = URL_ASSETS_ARTISTAS
  }

  ngOnInit() {
    this.tipoBusqueda = 'programa'
    console.log(this.divdataartistas)
    this.divinvisible = true
  }

  verificar_texto() {
    if(this.inputValue === '') {
      console.log("Está vacio")
      this.divdata = false
      this.divinvisible = true
    } else {
      console.log("No está vacio")
      this.buscar_programa(this.inputValue)
      this.buscar_concurso(this.inputValue)
      this.buscar_artistas(this.inputValue)
      this.divdata = true
      this.divinvisible = false
    }
  }

  buscar_programa(valorBusqueda:any) {
    this.ws.buscar_programa(valorBusqueda).subscribe((data) => {
      console.log(data)
      this.programas=data

      if(data==null) {
        this.divdataprograma = false;
      } else {
        this.divdataprograma = true;
      }
    },
    (error) => {console.log(error)}
    )
  }

  buscar_concurso(valorBusqueda:any) {
    this.ws.buscar_concurso(valorBusqueda).subscribe((data)=>{
      console.log(data)
      this.concursos = data
      if(data == null) {
        this.divdataconcurso = false
      } else {
        this.divdataconcurso = true
      }
    },
    (error) => {console.log(error)}
    )
  }

  buscar_artistas(valorBusqueda:any) {
    this.ws.buscar_artistas(valorBusqueda).subscribe((data) => {
      console.log(data) 
      this.artistas=data

      if(data == null) {
        this.divdataartistas = false
      } else {
        this.divdataartistas = true
      }
    },
    (error) => {console.log(error)}
    )
  }

  irConcursante(concursante:any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        concursantes: JSON.stringify(concursante),
        tipoConcurso: JSON.stringify(concursante)
      }
    }
    this.router.navigate(['/concurso/tecnicas/concursantes'], navigationExtras)
  }

  irArtista(artista:any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        artista: JSON.stringify(artista)
      }
    }
    this.router.navigate(['artistas-invitados/artista'], navigationExtras)
  }

  irInicio() {
    this.router.navigate(['/home'])
  }

  async abrirURL(direccion:any) {
    const url = direccion
    await Browser['open']({url})
  }

}
