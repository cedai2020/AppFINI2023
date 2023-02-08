import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-falso-footer',
  templateUrl: './falso-footer.component.html',
  styleUrls: ['./falso-footer.component.scss'],
})
export class FalsoFooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  irHome() {
    this.router.navigate(['/home'])
  }

}
