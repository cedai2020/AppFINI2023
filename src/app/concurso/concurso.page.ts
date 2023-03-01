import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ConcursoService } from "./concurso.service";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-concurso',
  templateUrl: './concurso.page.html',
  styleUrls: ['./concurso.page.scss'],
})
export class ConcursoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irTecnicas(tipo:any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        tipoConcurso: JSON.stringify(tipo)
      }
    }

    this.router.navigate(['concurso/tecnicas'], navigationExtras)
  }

  irFinipix() {
    this.router.navigate(['concurso/finipix'])
  }

}
