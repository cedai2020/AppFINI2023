import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tecnicas',
  templateUrl: './tecnicas.page.html',
  styleUrls: ['./tecnicas.page.scss'],
})
export class TecnicasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irConcursante(tipo:any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        tipoConcurso: JSON.stringify(tipo)
      }
    }
    this.router.navigate(['/concurso/tecnicas/concursantes'], navigationExtras)
  }

}
