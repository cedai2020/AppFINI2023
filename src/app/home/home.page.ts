import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  irPrograma(){
    this.router.navigate(['/programa'])
  }

  irConcurso() {
    this.router.navigate(['/concurso'])
  }

  irPaisInvitado() {
    this.router.navigate(['/pais-invitado'])
  }

  irArtistasInvitados() {
    this.router.navigate(['/artistas-invitados'])
  }

  irNosotros() {
    this.router.navigate(['/nosotros'])
  }

  irBuscar() {
    this.router.navigate(['buscar'])
  }

}
