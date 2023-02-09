import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-artistas-invitados',
  templateUrl: './artistas-invitados.page.html',
  styleUrls: ['./artistas-invitados.page.scss'],
})
export class ArtistasInvitadosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irArtista () {
    this.router.navigate(['artistas-invitados/artista'])
  }

}
