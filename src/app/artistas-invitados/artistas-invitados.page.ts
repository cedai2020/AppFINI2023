import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { ArtistasService } from './artistas.service';

@Component({
  selector: 'app-artistas-invitados',
  templateUrl: './artistas-invitados.page.html',
  styleUrls: ['./artistas-invitados.page.scss'],
})
export class ArtistasInvitadosPage implements OnInit {

  artistas:any;

  constructor(private router: Router, private route:ActivatedRoute, public ws:ArtistasService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.ws.obtenerArtistas().subscribe((data) => {
      this.artistas = data
    },
    (error) => {console.log(error)}
    )
  }

  irArtista (artista: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        artista: JSON.stringify(artista)
      }
    }

    this.router.navigate(['artistas-invitados/artista'], navigationExtras)
  }

}
