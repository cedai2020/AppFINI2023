import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router'
import { Browser } from "@capacitor/browser";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.page.html',
  styleUrls: ['./artista.page.scss'],
})
export class ArtistaPage implements OnInit {

  artista:any

  constructor(private route: ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe(params => {
      if(params) {
        this.artista = JSON.parse(params['artista'])
      }
    })

   }

  ngOnInit() {
  }

  async abrirURL(direccion:any) {
    console.log("Entro en la dirección: " + direccion)
    const url = direccion
    await Browser.open({url:url})
  }

}
