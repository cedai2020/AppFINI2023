import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router'
import {Plugins} from '@capacitor/core'
const {Browser} = Plugins;

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

}
