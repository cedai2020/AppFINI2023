import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ConcursoService } from "./concurso.service";

@Component({
  selector: 'app-concurso',
  templateUrl: './concurso.page.html',
  styleUrls: ['./concurso.page.scss'],
})
export class ConcursoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irTecnicas() {
    this.router.navigate(['concurso/tecnicas'])
  }

  irFinipix() {
    this.router.navigate(['concurso/finipix'])
  }

}
