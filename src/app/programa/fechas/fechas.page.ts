import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.page.html',
  styleUrls: ['./fechas.page.scss'],
})
export class FechasPage implements OnInit {

  tipoPrograma:any

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if(params) {
        this.tipoPrograma = JSON.parse(params['tipoPrograma'])
      }
      console.log("El tipo de programa a listar es: " + this.tipoPrograma)
    });
  }

  ngOnInit() {
  }

  irActividades(diaPrograma:any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        diaPrograma: JSON.stringify(diaPrograma),
        tipoPrograma: JSON.stringify(this.tipoPrograma)

      }
    }
    this.router.navigate(['programa/fechas/actividades'], navigationExtras)
  }

}
