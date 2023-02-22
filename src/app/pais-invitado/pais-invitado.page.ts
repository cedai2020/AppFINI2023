import { Component, OnInit } from '@angular/core';
import {URL_ASSETS_PAIS} from '../config/url_servicios'
import { PaisInvitadoService } from './pais-invitado.service'

@Component({
  selector: 'app-pais-invitado',
  templateUrl: './pais-invitado.page.html',
  styleUrls: ['./pais-invitado.page.scss'],
})
export class PaisInvitadoPage implements OnInit {

  nombre!:string;
  idpais!:any;
  bandera!:string;
  semblanza!:string;

  constructor(public ws: PaisInvitadoService) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.ws.obtenerPaisInvitado().subscribe(
      (data:any) => {
        this.idpais = data[0]['idpais'];
        this.semblanza = data[0]['semblanza'];
        this.nombre = data[0]['nombre'];
        this.bandera = URL_ASSETS_PAIS + data[0]['bandera'];
      }
    )
  }
  

}
