import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-programa',
  templateUrl: './programa.page.html',
  styleUrls: ['./programa.page.scss'],
})
export class ProgramaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irFechas() {
    this.router.navigate(['programa/fechas'])
  }

}
