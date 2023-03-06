import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ConcursoService } from '../../concurso.service';

@Component({
  selector: 'app-concursantes',
  templateUrl: './concursantes.page.html',
  styleUrls: ['./concursantes.page.scss'],
})
export class ConcursantesPage implements OnInit {

  tipoConcurso='DISPOSITIVOS MOVILES'
  concursantes:any

  constructor(public ws: ConcursoService, public router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.ws.obtenerConcurso(this.tipoConcurso).subscribe((data) => {
      this.concursantes = data;
    }, 
    (error) => {console.log(error)}
    )
  }

  irDetalle(concursante:any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        concursante: JSON.stringify(concursante),
        tipoConcurso: JSON.stringify(this.tipoConcurso)
      }
    }
    this.router.navigate(['concurso/finipix/concursantes/detalle'], navigationExtras)
  }

}
