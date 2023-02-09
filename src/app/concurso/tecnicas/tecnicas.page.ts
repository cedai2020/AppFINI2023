import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tecnicas',
  templateUrl: './tecnicas.page.html',
  styleUrls: ['./tecnicas.page.scss'],
})
export class TecnicasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irConcursante() {
    this.router.navigate(['/concurso/tecnicas/concursantes'])
  }

}
