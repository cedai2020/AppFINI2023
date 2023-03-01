import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-programa',
  templateUrl: './programa.page.html',
  styleUrls: ['./programa.page.scss'],
})
export class ProgramaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irFechas(tipo:any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        tipoPrograma: JSON.stringify(tipo)
      }
    };
    this.router.navigate(['programa/fechas'], navigationExtras)
  }

}
