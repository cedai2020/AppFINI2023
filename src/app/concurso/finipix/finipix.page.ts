import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finipix',
  templateUrl: './finipix.page.html',
  styleUrls: ['./finipix.page.scss'],
})
export class FinipixPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  irConcursantes() {
    this.router.navigate(['concurso/finipix/concursantes'])
  }

}
