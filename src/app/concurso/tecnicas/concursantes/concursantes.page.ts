import { Component, OnInit } from '@angular/core';
import { ConcursoService } from '../../concurso.service';
import {Router, ActivatedRoute} from "@angular/router";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-concursantes',
  templateUrl: './concursantes.page.html',
  styleUrls: ['./concursantes.page.scss'],
})
export class ConcursantesPage implements OnInit {

  tipoConcurso:any;
  concursantes:any;

  constructor(public ws: ConcursoService, public route: ActivatedRoute, public router: Router) { 
    this.route.queryParams.subscribe(params => {
      if(params) {
        this.tipoConcurso = JSON.parse(params['tipoConcurso']);
      }
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.ws.obtenerConcurso(this.tipoConcurso).subscribe(
      (data) => {
        this.concursantes = data;
      },
      (error) => {console.log(error)}
    )
  }

}
