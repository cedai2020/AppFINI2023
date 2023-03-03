import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tecnicas',
  templateUrl: './tecnicas.page.html',
  styleUrls: ['./tecnicas.page.scss'],
})
export class TecnicasPage implements OnInit {

  rama:any

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if(params) {
        this.rama = JSON.parse(params['tipoConcurso'])
      }
    })
   }

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
